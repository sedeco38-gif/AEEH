(() => {
    const accessDefinitions = [
        {
            id: "manual",
            icon: "?",
            label: "Manual / Ayuda",
            action() {
                window.alert("El manual o guía de usuario está pendiente de vincularse.");
            }
        },
        {
            id: "buzon",
            icon: "✉",
            label: "Buzón",
            action() {
                window.alert("El buzón institucional está pendiente de habilitarse.");
            }
        },
        {
            id: "menu",
            icon: "☰",
            label: "Menú",
            action() {
                window.location.href = "menu_prog.html";
            }
        }
    ];

    function createAccess(definition) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "aeeh-header-access";
        button.dataset.aeehHeaderAccess = definition.id;
        button.setAttribute("aria-label", definition.label);
        button.title = definition.label;
        button.innerHTML = `<span class="aeeh-header-access-icon" aria-hidden="true">${definition.icon}</span><span>${definition.label}</span>`;
        button.addEventListener("click", definition.action);
        return button;
    }

    function mountHeaderAccesses() {
        document.querySelectorAll(".usuario-panel").forEach(panel => {
            if (panel.querySelector("[data-aeeh-header-accesses]")) return;

            const accesses = document.createElement("nav");
            accesses.className = "aeeh-header-accesses";
            accesses.dataset.aeehHeaderAccesses = "true";
            accesses.setAttribute("aria-label", "Accesos de la plataforma");
            accessDefinitions.forEach(definition => accesses.appendChild(createAccess(definition)));

            const session = document.createElement("div");
            session.className = "aeeh-header-session";
            session.setAttribute("aria-label", "Información de sesión");
            Array.from(panel.children).forEach(child => {
                if (child !== accesses) session.appendChild(child);
            });

            panel.insertBefore(accesses, panel.firstElementChild);
            panel.appendChild(session);
        });
    }

    function mountAgencyContact() {
        document.querySelectorAll("body > .contenedor footer").forEach(footer => {
            const originalAddress = footer.querySelector(".footer-logo-der");
            if (!originalAddress || originalAddress.dataset.aeehAgencyAddress === "true") return;

            const contact = document.createElement("address");
            contact.className = "footer-logo-der aeeh-footer-address";
            contact.dataset.aeehAgencyAddress = "true";
            contact.setAttribute("aria-label", "Domicilio y teléfono institucional");
            contact.innerHTML = "<span>Camino Real de la Plata #222</span><span>1.º Piso, Local 2</span><span>Fraccionamiento Zona Plateada, C. P. 42084</span><span>Pachuca de Soto, Hidalgo, México</span><span>Teléfono: 771 688 61 89</span>";
            originalAddress.replaceWith(contact);
        });
    }

    function mountInstitutionalElements() {
        mountHeaderAccesses();
        mountAgencyContact();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mountInstitutionalElements, { once: true });
    } else {
        mountInstitutionalElements();
    }
})();
