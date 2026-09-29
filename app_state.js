(() => {
    const user = sessionStorage.getItem("usuario") || "anonimo";
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    const namespace = /\/Resp\//i.test(path) ? `Resp/${page}` : page;
    const storageKey = `aeeh.ui.${encodeURIComponent(user)}.${namespace.toLowerCase()}`;
    const ignoredTypes = new Set(["hidden", "password", "button", "submit", "reset"]);
    let saveTimer;

    function controls() {
        return Array.from(document.querySelectorAll("input, select, textarea"))
            .filter(control => !ignoredTypes.has((control.type || "").toLowerCase()) && !control.disabled && (!control.readOnly || control.hasAttribute("data-app-state")));
    }

    function controlKey(control, index) {
        return control.id ? `id:${control.id}` : `field:${index}`;
    }

    function readState() {
        try {
            const state = JSON.parse(sessionStorage.getItem(storageKey) || "{}");
            return new Map((state.fields || []).map(field => [field.key, field]));
        } catch (error) {
            return new Map();
        }
    }

    function showFileNote(control, fileName) {
        const parent = control.parentElement;
        if (!parent) return;

        let note = parent.querySelector("[data-app-file-note]");
        if (!fileName) {
            note?.remove();
            return;
        }

        if (!note) {
            note = document.createElement("small");
            note.className = "app-file-note";
            note.dataset.appFileNote = "true";
            control.insertAdjacentElement("afterend", note);
        }
        note.textContent = `Archivo seleccionado anteriormente: ${fileName}. Vuelva a seleccionarlo para adjuntarlo.`;
    }

    function applyField(control, field) {
        if (control.type === "file") {
            if (control.hasAttribute("data-app-state-file-preview")) {
                showFileNote(control, "");
            } else {
                showFileNote(control, field.fileName || "");
            }
            return;
        }

        if (control.type === "checkbox" || control.type === "radio") {
            control.checked = Boolean(field.checked);
        } else if (control.multiple && control.tagName === "SELECT") {
            const selectedValues = new Set(field.value || []);
            Array.from(control.options).forEach(option => {
                option.selected = selectedValues.has(option.value);
            });
        } else if (field.value !== undefined) {
            control.value = field.value;
        }
    }

    function restoreState(addedNodes) {
        const fields = readState();
        if (!fields.size) return;

        const allControls = controls();
        const candidates = addedNodes
            ? allControls.filter(control => addedNodes.some(node => node === control || node.contains?.(control)))
            : allControls;

        candidates.forEach(control => {
            const index = allControls.indexOf(control);
            const field = fields.get(controlKey(control, index)) || fields.get(`field:${index}`);
            if (field) applyField(control, field);
        });
    }

    function keyForPath(targetPath) {
        const targetPage = targetPath.split("/").pop() || "index.html";
        const targetNamespace = /\/Resp\//i.test(targetPath) ? `Resp/${targetPage}` : targetPage;
        return `aeeh.ui.${encodeURIComponent(user)}.${targetNamespace.toLowerCase()}`;
    }

    function updateStageNavigation() {
        const currentPath = window.location.pathname.toLowerCase();
        document.querySelectorAll(".etapas .etapa").forEach(button => {
            const route = button.getAttribute("onclick")?.match(/['"]([^'"]+\.html)['"]/i)?.[1];
            if (!route) return;

            const target = new URL(route, window.location.href);
            const isCurrent = target.pathname.toLowerCase() === currentPath;
            const isSaved = Boolean(sessionStorage.getItem(keyForPath(target.pathname)));
            button.classList.toggle("activa", isCurrent);
            button.classList.toggle("completada", !isCurrent && isSaved);
            button.classList.toggle("pendiente", !isCurrent && !isSaved);
            button.setAttribute("aria-current", isCurrent ? "step" : "false");
        });
    }

    function saveState() {
        const previousFields = readState();
        const fields = controls().map((control, index) => {
            const field = {
                key: controlKey(control, index),
                type: control.type || control.tagName.toLowerCase()
            };

            if (control.type === "file") {
                field.fileName = control.files?.[0]?.name || "";
                const previousField = previousFields.get(field.key);
                if (previousField?.previewFiles) field.previewFiles = previousField.previewFiles;
            } else if (control.type === "checkbox" || control.type === "radio") {
                field.checked = control.checked;
                field.value = control.value;
            } else if (control.multiple && control.tagName === "SELECT") {
                field.value = Array.from(control.selectedOptions, option => option.value);
            } else {
                field.value = control.value;
            }
            return field;
        });

        const saved = writeFields(new Map(fields.map(field => [field.key, field])));
        updateStageNavigation();
        return saved;
    }

    function writeFields(fields) {
        try {
            sessionStorage.setItem(storageKey, JSON.stringify({ fields: Array.from(fields.values()) }));
            return true;
        } catch (error) {
            console.warn("No se pudo conservar el estado local de este módulo.", error);
            return false;
        }
    }

    function getFilePreviews(controlId) {
        const field = readState().get(`id:${controlId}`);
        return Array.isArray(field?.previewFiles) ? field.previewFiles : [];
    }

    function hasSavedState() {
        return sessionStorage.getItem(storageKey) !== null;
    }

    function clearCurrentModuleState() {
        try {
            sessionStorage.removeItem(storageKey);
            updateStageNavigation();
            return true;
        } catch (error) {
            console.warn("No se pudo reemplazar el estado local de este módulo.", error);
            return false;
        }
    }

    function getModuleFields(modulePage, legacyFieldIds = []) {
        try {
            const targetPath = new URL(modulePage, window.location.href).pathname;
            const state = JSON.parse(sessionStorage.getItem(keyForPath(targetPath)) || "{}");
            const fields = {};
            (state.fields || []).forEach(field => {
                let id = field.key?.startsWith("id:") ? field.key.slice(3) : "";
                if (!id && field.key?.startsWith("field:")) {
                    id = legacyFieldIds[Number(field.key.slice(6))] || "";
                }
                if (!id) return;

                fields[id] = field.type === "checkbox" || field.type === "radio"
                    ? { value: field.value, checked: field.checked }
                    : field.value;
            });
            return fields;
        } catch (error) {
            return {};
        }
    }

    function hasModuleState(modulePage) {
        try {
            const targetPath = new URL(modulePage, window.location.href).pathname;
            return sessionStorage.getItem(keyForPath(targetPath)) !== null;
        } catch (error) {
            return false;
        }
    }

    function setFilePreviews(controlId, previews) {
        const fields = readState();
        const key = `id:${controlId}`;
        const field = fields.get(key) || { key, type: "file", fileName: "" };
        field.previewFiles = Array.isArray(previews) ? previews : [];
        field.fileName = field.previewFiles[0]?.name || "";
        fields.set(key, field);
        return writeFields(fields);
    }

    function scheduleSave() {
        window.clearTimeout(saveTimer);
        saveTimer = window.setTimeout(saveState, 120);
    }

    restoreState();
    updateStageNavigation();

    document.addEventListener("input", scheduleSave);
    document.addEventListener("change", scheduleSave);
    document.addEventListener("click", event => {
        if (event.target.closest("button, [onclick], a[href]")) saveState();
    }, true);
    window.addEventListener("pagehide", saveState);

    const observer = new MutationObserver(records => {
        const addedNodes = records.flatMap(record => Array.from(record.addedNodes))
            .filter(node => node.nodeType === Node.ELEMENT_NODE);
        if (addedNodes.length) restoreState(addedNodes);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.AEEHState = {
        save: saveState,
        restore: restoreState,
        hasSavedState,
        clearCurrentModuleState,
        getModuleFields,
        hasModuleState,
        getFilePreviews,
        setFilePreviews
    };
})();