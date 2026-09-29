(() => {
    const REL_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
    const MAIN_NS = "http://schemas.openxmlformats.org/spreadsheetml/2006/main";
    const SECTIONS = [
        {
            id: "iluminacion", sheet: "ILUMINACIÓN", headerRow: 8,
            formulas: { H: "F{r}*G{r}", J: "H{r}*I{r}", M: "K{r}+L{r}", O: "J{r}*M{r}*52/1000" },
            quantityKey: "totalLamparas", powerKey: "potenciaTotalW", annualKey: "consumoAnualKwh", lampsKey: "totalLamparas",
            columns: [
                ["A", "edificio", "Edificio", "text"], ["B", "nivel", "Nivel", "text"], ["C", "dependencia", "Secretaría/Dependencia", "text"],
                ["D", "area", "Área Específica", "text"], ["E", "descripcion", "Descripción de la luminaria", "text"], ["F", "cantidadLuminarios", "Cantidad de Luminarios", "number"],
                ["G", "lamparasPorLuminario", "Lámpara por Luminario", "number"], ["H", "totalLamparas", "Total de lámparas", "calculated"],
                ["I", "potenciaLamparaW", "Potencia (W) por lámpara", "number"], ["J", "potenciaTotalW", "Total de consumo (W)", "calculated"],
                ["K", "horasSemanaLaboral", "Horas de operación (Lun-Vie)", "number"], ["L", "horasFinSemana", "Horas de Operación (Sáb-Dom)", "number"],
                ["M", "horasSemana", "Horas de operación Totales a la Semana", "calculated"], ["N", "areaM2", "Área en m2 del espacio", "number"],
                ["O", "consumoAnualKwh", "Consumo (KWh/año)", "calculated"], ["P", "observaciones", "Observaciones", "text"]
            ]
        },
        {
            id: "computo", sheet: "CÓMPUTO", headerRow: 7,
            formulas: { I: "F{r}*H{r}", L: "-J{r}+K{r}", M: "I{r}*L{r}*52/1000" },
            quantityKey: "cantidad", powerKey: "potenciaTotalW", annualKey: "consumoAnualKwh",
            columns: [
                ["A", "edificio", "Edificio", "text"], ["B", "nivel", "Nivel", "text"], ["C", "dependencia", "Secretaría/Dependencia", "text"],
                ["D", "area", "Área especÍfica", "text"], ["E", "descripcion", "Descripción del equipo", "text"], ["F", "cantidad", "Cantidad", "number"],
                ["G", "consumoEspera", "Consumo en espera", "number"], ["H", "potenciaW", "Potencia (W)", "number"],
                ["I", "potenciaTotalW", "Total de consumo (W)", "calculated"], ["J", "horasSemanaLaboral", "Horas de operación (Lun-Vie)", "number"],
                ["K", "horasFinSemana", "Horas de Operación (Sáb-Dom)", "number"], ["L", "horasSemana", "Horas de operación Totales a la Semana", "calculated"],
                ["M", "consumoAnualKwh", "Consumo en KWh/año", "calculated"]
            ]
        },
        {
            id: "fuerza", sheet: "FUERZA", headerRow: 9,
            formulas: { I: "H{r}*F{r}", M: "K{r}+L{r}", N: "I{r}*M{r}*52/1000" },
            quantityKey: "cantidad", powerKey: "potenciaTotalW", annualKey: "consumoAnualKwh",
            columns: [
                ["A", "edificio", "Edificio", "text"], ["B", "nivel", "Nivel", "text"], ["C", "dependencia", "Secretaría/Dependecia", "text"],
                ["D", "area", "Área específica", "text"], ["E", "descripcion", "Descripción del equipo", "text"], ["F", "cantidad", "Cantidad", "number"],
                ["G", "capacidadHp", "Capacidad [Hp]", "number"], ["H", "potenciaW", "Potencia (W)", "number"],
                ["I", "potenciaTotalW", "Total de consumo (W)", "calculated"], ["J", "volts", "Volts (V)", "number"],
                ["K", "horasSemanaLaboral", "Horas de operación (Lun-Vie)", "number"], ["L", "horasFinSemana", "Horas de Operación (Sáb-Dom)", "number"],
                ["M", "horasSemana", "Horas de operación Totales a la Semana", "calculated"], ["N", "consumoAnualKwh", "Consumo en KWh/año", "calculated"],
                ["O", "anioInstalacion", "Año en que se instalo", "number"], ["P", "observaciones", "Observaciones", "text"]
            ]
        },
        {
            id: "aire_ac", sheet: "AIRE AC.", headerRow: 8,
            formulas: { K: "F{r}*J{r}", N: "L{r}+M{r}", P: "K{r}*N{r}*52/1000" },
            quantityKey: "cantidad", powerKey: "potenciaTotalW", annualKey: "consumoAnualKwh",
            columns: [
                ["A", "edificio", "Edificio", "text"], ["B", "nivel", "Nivel", "text"], ["C", "dependencia", "Secretaría/Dependencia", "text"],
                ["D", "area", "Área específica", "text"], ["E", "descripcion", "Descripción del equipo de ventilación", "text"], ["F", "cantidad", "Cantidad", "number"],
                ["G", "btuHora", "BTU/HR", "number"], ["H", "volts", "Volts", "number"], ["I", "amperes", "Amperes", "number"],
                ["J", "potenciaW", "Potencia (W)", "number"], ["K", "potenciaTotalW", "Total de consumo (W)", "calculated"],
                ["L", "horasSemanaLaboral", "Horas de operación (Lun-Vie)", "number"], ["M", "horasFinSemana", "Horas de Operación (Sáb-Dom)", "number"],
                ["N", "horasSemana", "Horas de operación Totales a la Semana", "calculated"], ["O", "anioInstalacion", "Año en que se instalo", "number"],
                ["P", "consumoAnualKwh", "Consumo total kWh/año", "calculated"]
            ]
        },
        {
            id: "electrodomesticos", sheet: "ELECTRODOMESTICOS", headerRow: 8,
            formulas: { H: "F{r}*G{r}", K: "I{r}+J{r}", L: "H{r}*K{r}*52/1000" },
            quantityKey: "cantidad", powerKey: "potenciaTotalW", annualKey: "consumoAnualKwh",
            columns: [
                ["A", "edificio", "Edificio", "text"], ["B", "nivel", "Nivel", "text"], ["C", "dependencia", "Secretaría/Dependencia", "text"],
                ["D", "area", "Área específica", "text"], ["E", "descripcion", "Descripción del equipo", "text"], ["F", "cantidad", "Cantidad", "number"],
                ["G", "potenciaW", "Potencia (W)", "number"], ["H", "potenciaTotalW", "Total de consumo (W)", "calculated"],
                ["I", "horasSemanaLaboral", "Horas de operación (Lun-Vie)", "number"], ["J", "horasFinSemana", "Horas de Operación (Sáb-Dom)", "number"],
                ["K", "horasSemana", "Horas de operación Totales a la Semana", "calculated"], ["L", "consumoAnualKwh", "Consumo en KWh/año", "calculated"]
            ]
        },
        {
            id: "voz_datos", sheet: "VOZ-DATOS Y VIDEOVIGILANCIA", headerRow: 8,
            formulas: { H: "F{r}*G{r}", K: "I{r}+J{r}", L: "H{r}*K{r}*52/1000" },
            quantityKey: "cantidad", powerKey: "potenciaTotalW", annualKey: "consumoAnualKwh",
            columns: [
                ["A", "edificio", "Edificio", "text"], ["B", "nivel", "Nivel", "text"], ["C", "dependencia", "Secretaría/Dependencia", "text"],
                ["D", "area", "Área Específica", "text"], ["E", "descripcion", "Descripción del equipo electrico", "text"], ["F", "cantidad", "Cantidad", "number"],
                ["G", "potenciaW", "Potencia (W)", "number"], ["H", "potenciaTotalW", "Total de consumo (W)", "calculated"],
                ["I", "horasSemanaLaboral", "Horas de operación (Lun-Vie)", "number"], ["J", "horasFinSemana", "Horas de Operación (Sáb-Dom)", "number"],
                ["K", "horasSemana", "Horas de operación Totales a la Semana", "calculated"], ["L", "consumoAnualKwh", "Consumo en KWh/año", "calculated"]
            ]
        },
        {
            id: "equipos_personales", sheet: "EQUIPOS PERSONALES", headerRow: 8,
            formulas: { H: "F{r}*G{r}", K: "I{r}+J{r}", L: "H{r}*K{r}*52/1000" },
            quantityKey: "cantidad", powerKey: "potenciaTotalW", annualKey: "consumoAnualKwh",
            columns: [
                ["A", "edificio", "Edificio", "text"], ["B", "nivel", "Nivel", "text"], ["C", "dependencia", "Secretaría/Dependencia", "text"],
                ["D", "area", "Área Específica", "text"], ["E", "descripcion", "Descripción del equipo eléctrico", "text"], ["F", "cantidad", "Cantidad", "number"],
                ["G", "potenciaW", "Potencia (W)", "number"], ["H", "potenciaTotalW", "Total de consumo (W)", "calculated"],
                ["I", "horasSemanaLaboral", "Horas de operación (Lun-Vie)", "number"], ["J", "horasFinSemana", "Horas de Operación (Sáb-Dom)", "number"],
                ["K", "horasSemana", "Horas de operación Totales a la Semana", "calculated"], ["L", "consumoAnualKwh", "Consumo en KWh/año", "calculated"]
            ]
        },
        {
            id: "otros", sheet: "OTROS", headerRow: 8,
            formulas: { H: "F{r}*G{r}", K: "I{r}+J{r}", L: "H{r}*K{r}*52/1000" },
            quantityKey: "cantidad", powerKey: "potenciaTotalW", annualKey: "consumoAnualKwh",
            columns: [
                ["A", "edificio", "Edificio", "text"], ["B", "nivel", "Nivel", "text"], ["C", "dependencia", "Secretaria/Dependencia", "text"],
                ["D", "area", "Area Especifica", "text"], ["E", "descripcion", "Descripción del equipo electrico", "text"], ["F", "cantidad", "Cantidad", "number"],
                ["G", "potenciaW", "Potencia (W)", "number"], ["H", "potenciaTotalW", "Total de consumo (W)", "calculated"],
                ["I", "horasSemanaLaboral", "Horas de operación (Lun-Vie)", "number"], ["J", "horasFinSemana", "Horas de Operación (Sáb-Dom)", "number"],
                ["K", "horasSemana", "Horas de operación Totales a la Semana", "calculated"], ["L", "consumoAnualKwh", "Consumo en KWh/año", "calculated"]
            ]
        }
    ];

    const INPUT_COLUMNS = new Map(SECTIONS.map(section => [section.id, section.columns.filter(column => column[3] !== "calculated")]));
    const sectionById = new Map(SECTIONS.map(section => [section.id, section]));
    const numberFormatter = new Intl.NumberFormat("es-MX", { maximumFractionDigits: 2 });
    let zipArchive = null;

    function normalizeName(value) {
        return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
    }

    function xmlElements(node, localName) {
        return Array.from(node.getElementsByTagNameNS("*", localName));
    }

    function parseXml(text, partName) {
        const parsed = new DOMParser().parseFromString(text, "application/xml");
        if (xmlElements(parsed, "parsererror").length) throw new Error(`No se pudo interpretar el XML interno ${partName}.`);
        return parsed;
    }

    async function openZip(file) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        if (bytes.length < 22) throw new Error("El archivo es demasiado pequeño para ser un libro XLSX.");
        const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        let endRecord = -1;
        for (let index = bytes.length - 22; index >= Math.max(0, bytes.length - 65557); index--) {
            if (view.getUint32(index, true) === 0x06054b50) { endRecord = index; break; }
        }
        if (endRecord < 0) throw new Error("No se encontró la estructura ZIP requerida; el archivo no parece un XLSX válido.");
        if (view.getUint16(endRecord + 4, true) !== 0 || view.getUint16(endRecord + 6, true) !== 0) {
            throw new Error("No se admiten libros XLSX divididos en varios volúmenes.");
        }

        const entryCount = view.getUint16(endRecord + 10, true);
        const directoryOffset = view.getUint32(endRecord + 16, true);
        if (entryCount === 0xffff || directoryOffset === 0xffffffff) throw new Error("No se admiten archivos ZIP64 en esta versión.");
        const entries = new Map();
        const decoder = new TextDecoder("utf-8");
        let offset = directoryOffset;

        for (let index = 0; index < entryCount; index++) {
            if (view.getUint32(offset, true) !== 0x02014b50) throw new Error("El directorio central del XLSX está dañado.");
            const flags = view.getUint16(offset + 8, true);
            const method = view.getUint16(offset + 10, true);
            const compressedSize = view.getUint32(offset + 20, true);
            const nameLength = view.getUint16(offset + 28, true);
            const extraLength = view.getUint16(offset + 30, true);
            const commentLength = view.getUint16(offset + 32, true);
            const localOffset = view.getUint32(offset + 42, true);
            const name = decoder.decode(bytes.subarray(offset + 46, offset + 46 + nameLength));
            entries.set(name, { flags, method, compressedSize, localOffset });
            offset += 46 + nameLength + extraLength + commentLength;
        }

        async function readBytes(entryName) {
            const entry = entries.get(entryName);
            if (!entry) throw new Error(`El XLSX no contiene la parte requerida ${entryName}.`);
            if (entry.flags & 1) throw new Error("El libro está cifrado y no puede leerse sin modificar credenciales.");
            const local = entry.localOffset;
            if (view.getUint32(local, true) !== 0x04034b50) throw new Error(`La entrada ${entryName} tiene una cabecera local inválida.`);
            const nameLength = view.getUint16(local + 26, true);
            const extraLength = view.getUint16(local + 28, true);
            const dataStart = local + 30 + nameLength + extraLength;
            const compressed = bytes.slice(dataStart, dataStart + entry.compressedSize);
            if (entry.method === 0) return compressed;
            if (entry.method !== 8) throw new Error(`La compresión ${entry.method} de ${entryName} no es compatible.`);
            if (typeof DecompressionStream !== "function") throw new Error("Este navegador no soporta la descompresión XLSX requerida.");
            try {
                const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
                return new Uint8Array(await new Response(stream).arrayBuffer());
            } catch (error) {
                throw new Error(`No se pudo descomprimir ${entryName}: ${error.message}`);
            }
        }

        async function readText(entryName) {
            return new TextDecoder("utf-8").decode(await readBytes(entryName));
        }

        return { entries, readBytes, readText };
    }

    function resolveZipPath(sourceEntry, target) {
        if (target.startsWith("/")) return target.slice(1);
        const parts = `${sourceEntry.slice(0, sourceEntry.lastIndexOf("/") + 1)}${target}`.split("/");
        const resolved = [];
        parts.forEach(part => {
            if (!part || part === ".") return;
            if (part === "..") resolved.pop();
            else resolved.push(part);
        });
        return resolved.join("/");
    }

    function getRelationships(xml) {
        return new Map(xmlElements(xml, "Relationship").map(relationship => [relationship.getAttribute("Id"), relationship.getAttribute("Target")]));
    }

    function cellColumnIndex(reference) {
        const letters = String(reference).match(/^[A-Z]+/i)?.[0]?.toUpperCase() || "";
        let value = 0;
        for (const letter of letters) value = value * 26 + letter.charCodeAt(0) - 64;
        return value - 1;
    }

    function columnLetter(index) {
        let value = index + 1;
        let letters = "";
        while (value > 0) {
            const remainder = (value - 1) % 26;
            letters = String.fromCharCode(65 + remainder) + letters;
            value = Math.floor((value - 1) / 26);
        }
        return letters;
    }

    function valueFromCell(cell, sharedStrings) {
        if (!cell) return { value: "", formula: null };
        const formulaElement = xmlElements(cell, "f")[0] || null;
        const valueElement = xmlElements(cell, "v")[0] || null;
        const type = cell.getAttribute("t");
        let value = valueElement?.textContent || "";
        if (type === "s" && value !== "") value = sharedStrings[Number(value)] ?? "";
        else if (type === "inlineStr") value = xmlElements(cell, "t").map(item => item.textContent).join("");
        return { value, formula: formulaElement };
    }

    async function parseWorkbook(file) {
        if (!/\.xlsx$/i.test(file.name)) throw new Error("El formato oficial es XLSX. Seleccione un archivo .xlsx; los libros .xls no son compatibles.");
        zipArchive = await openZip(file);
        const workbook = parseXml(await zipArchive.readText("xl/workbook.xml"), "xl/workbook.xml");
        const workbookRels = parseXml(await zipArchive.readText("xl/_rels/workbook.xml.rels"), "xl/_rels/workbook.xml.rels");
        const workbookTargets = getRelationships(workbookRels);
        const sharedText = zipArchive.entries.has("xl/sharedStrings.xml") ? await zipArchive.readText("xl/sharedStrings.xml") : "";
        const sharedXml = sharedText ? parseXml(sharedText, "xl/sharedStrings.xml") : null;
        const sharedStrings = sharedXml ? xmlElements(sharedXml, "si").map(item => xmlElements(item, "t").map(text => text.textContent).join("")) : [];
        const sheetNodes = xmlElements(workbook, "sheet");
        const sheetsByName = new Map();

        for (const sheetNode of sheetNodes) {
            const relationId = sheetNode.getAttributeNS(REL_NS, "id") || sheetNode.getAttribute("r:id");
            const target = workbookTargets.get(relationId);
            if (!target) throw new Error(`La hoja ${sheetNode.getAttribute("name")} no tiene una relación de archivo válida.`);
            const path = resolveZipPath("xl/workbook.xml", target);
            const xml = parseXml(await zipArchive.readText(path), path);
            const rows = new Map();
            const sheetData = xmlElements(xml, "sheetData")[0];
            for (const rowNode of xmlElements(sheetData || xml, "row")) {
                const rowNumber = Number(rowNode.getAttribute("r"));
                const cells = new Map();
                for (const cell of xmlElements(rowNode, "c")) cells.set(cellColumnIndex(cell.getAttribute("r")), valueFromCell(cell, sharedStrings));
                rows.set(rowNumber, cells);
            }

            const tablePart = xmlElements(xml, "tablePart")[0];
            if (!tablePart) throw new Error(`La hoja ${sheetNode.getAttribute("name")} no contiene la tabla estructurada del formato.`);
            const tableRelationId = tablePart.getAttributeNS(REL_NS, "id") || tablePart.getAttribute("r:id");
            const relsPath = `${path.slice(0, path.lastIndexOf("/") + 1)}_rels/${path.slice(path.lastIndexOf("/") + 1)}.rels`;
            const sheetRels = parseXml(await zipArchive.readText(relsPath), relsPath);
            const tableTarget = getRelationships(sheetRels).get(tableRelationId);
            if (!tableTarget) throw new Error(`No se encontró la tabla vinculada con ${sheetNode.getAttribute("name")}.`);
            const tablePath = resolveZipPath(path, tableTarget);
            const tableXml = parseXml(await zipArchive.readText(tablePath), tablePath);
            const table = xmlElements(tableXml, "table")[0];
            const tableRef = table?.getAttribute("ref") || "";
            const firstTableRow = Number(tableRef.match(/\d+/)?.[0] || 0);
            const lastTableRow = Number(tableRef.match(/:(?:[A-Z]+)(\d+)$/i)?.[1] || firstTableRow);
            const tableColumnCount = xmlElements(tableXml, "tableColumn").length;
            sheetsByName.set(normalizeName(sheetNode.getAttribute("name")), {
                name: sheetNode.getAttribute("name"), path, rows, tableRef, firstTableRow, lastTableRow, tableColumnCount
            });
        }

        const missing = SECTIONS.filter(section => !sheetsByName.has(normalizeName(section.sheet)));
        if (missing.length) throw new Error(`El archivo no corresponde al formato oficial. Faltan hojas: ${missing.map(section => section.sheet).join(", ")}.`);

        const parsedSections = [];
        const extraSheets = [];
        for (const [normalizedName, sheet] of sheetsByName) {
            if (!SECTIONS.some(section => normalizeName(section.sheet) === normalizedName)) extraSheets.push(sheet.name);
        }

        for (const section of SECTIONS) {
            const sheet = sheetsByName.get(normalizeName(section.sheet));
            if (sheet.tableColumnCount !== section.columns.length) {
                throw new Error(`La hoja ${section.sheet} tiene ${sheet.tableColumnCount} columnas de tabla; el formato requiere ${section.columns.length}.`);
            }
            for (let columnIndex = 0; columnIndex < section.columns.length; columnIndex++) {
                const expected = section.columns[columnIndex][2];
                const cell = sheet.rows.get(section.headerRow)?.get(columnIndex);
                const actual = valueFromCell(cell, sharedStrings).value;
                if (normalizeName(actual) !== normalizeName(expected)) {
                    throw new Error(`Encabezado inesperado en ${section.sheet}!${columnLetter(columnIndex)}${section.headerRow}: se esperaba "${expected}" y se encontró "${actual || "vacío"}".`);
                }
            }

            const firstDataRow = sheet.firstTableRow + 1;
            if (firstDataRow <= section.headerRow || firstDataRow > sheet.lastTableRow) {
                throw new Error(`La tabla de ${section.sheet} no inicia después de sus encabezados visibles.`);
            }
            for (const [column, formulaTemplate] of Object.entries(section.formulas)) {
                const formula = sheet.rows.get(firstDataRow)?.get(cellColumnIndex(column))?.formula;
                const actualFormula = formula?.textContent?.replace(/\$/g, "").replace(/\s/g, "").toUpperCase() || "";
                const expectedFormula = formulaTemplate.replace(/\{r\}/g, String(firstDataRow)).replace(/\$/g, "").replace(/\s/g, "").toUpperCase();
                if (actualFormula !== expectedFormula) {
                    throw new Error(`La fórmula de ${section.sheet}!${column}${firstDataRow} no coincide con el formato oficial. Se esperaba ${expectedFormula}; se encontró ${actualFormula || "sin fórmula"}.`);
                }
            }

            const rows = [];
            for (let rowNumber = firstDataRow; rowNumber <= sheet.lastTableRow; rowNumber++) {
                const sourceCells = sheet.rows.get(rowNumber) || new Map();
                const record = {};
                let hasInput = false;
                for (const [column, key, label, kind] of section.columns) {
                    if (kind === "calculated") continue;
                    const parsed = sourceCells.get(cellColumnIndex(column));
                    if (parsed?.formula) continue;
                    let raw = String(parsed?.value ?? "").trim();
                    if (/^columna\s*\d+$/i.test(raw)) raw = "";
                    if (kind === "number" && raw !== "") {
                        const numeric = Number(raw);
                        if (!Number.isFinite(numeric)) {
                            throw new Error(`Valor no numérico en ${section.sheet}!${column}${rowNumber} (${label}): "${raw}".`);
                        }
                        raw = String(numeric);
                    }
                    record[key] = raw;
                    if (raw !== "") hasInput = true;
                }
                if (hasInput) rows.push({ id: String(rowNumber), data: record });
            }
            parsedSections.push({ section, sheet, rows });
        }

        return { sections: parsedSections, sheetNames: sheetNodes.map(node => node.getAttribute("name")), extraSheets };
    }

    function numericValue(value) {
        if (value === undefined || value === null || String(value).trim() === "") return 0;
        const number = Number(value);
        return Number.isFinite(number) ? number : 0;
    }

    function rowValues(section, rowElement) {
        const data = {};
        section.columns.filter(column => column[3] !== "calculated").forEach(column => {
            const input = rowElement.querySelector(`[data-field="${column[1]}"]`);
            data[column[1]] = input?.value.trim() || "";
        });
        return data;
    }

    function hasCapturedInput(section, data) {
        return INPUT_COLUMNS.get(section.id).some(column => data[column[1]] !== "");
    }

    function computeRow(section, data) {
        const n = key => numericValue(data[key]);
        switch (section.id) {
            case "iluminacion": {
                const totalLamparas = n("cantidadLuminarios") * n("lamparasPorLuminario");
                const potenciaTotalW = totalLamparas * n("potenciaLamparaW");
                const horasSemana = n("horasSemanaLaboral") + n("horasFinSemana");
                return { totalLamparas, potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
            }
            case "computo": {
                const potenciaTotalW = n("cantidad") * n("potenciaW");
                const horasSemana = -n("horasSemanaLaboral") + n("horasFinSemana");
                return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
            }
            case "fuerza": {
                const potenciaTotalW = n("potenciaW") * n("cantidad");
                const horasSemana = n("horasSemanaLaboral") + n("horasFinSemana");
                return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
            }
            case "aire_ac": {
                const potenciaTotalW = n("cantidad") * n("potenciaW");
                const horasSemana = n("horasSemanaLaboral") + n("horasFinSemana");
                return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
            }
            default: {
                const potenciaTotalW = n("cantidad") * n("potenciaW");
                const horasSemana = n("horasSemanaLaboral") + n("horasFinSemana");
                return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
            }
        }
    }

    function rowFieldId(sectionId, rowId, key) {
        return `censo_${sectionId}_${rowId}_${key}`;
    }

    function ensureResultField(section, key) {
        const id = `censoResultado_${section.id}_${key}`;
        let field = document.getElementById(id);
        if (!field) {
            field = document.createElement("input");
            field.type = "text";
            field.id = id;
            field.readOnly = true;
            field.dataset.appState = "true";
            field.className = "readonly";
            field.style.display = "none";
            document.querySelector(".censo-metadata")?.appendChild(field);
        }
        return field;
    }

    function ensureResultFields(section) {
        ["registros", "cantidad", "lamparas", "potenciaW", "consumoAnualKwh"].forEach(key => ensureResultField(section, key));
    }

    function setMetadata(section, present, rowIds) {
        const presentField = document.getElementById(`censoPresent_${section.id}`);
        const rowsField = document.getElementById(`censoRows_${section.id}`);
        if (presentField) presentField.value = present ? "1" : "0";
        if (rowsField) rowsField.value = rowIds.join(",");
    }

    function getRowInput(section, rowId, field) {
        const input = document.createElement("input");
        input.id = rowFieldId(section.id, rowId, field[1]);
        input.dataset.field = field[1];
        input.setAttribute("aria-label", `${section.name}, fila ${rowId}: ${field[2]}`);
        if (field[3] === "calculated") {
            input.type = "text";
            input.readOnly = true;
            input.dataset.appState = "true";
            input.className = "censo-calculado";
        } else if (field[3] === "number") {
            input.type = "number";
            input.step = "any";
            input.inputMode = "decimal";
            input.className = "censo-numero-entrada";
        } else {
            input.type = "text";
        }
        return input;
    }

    function createSectionCard(section, rowIds) {
        const card = document.createElement("section");
        card.className = "card censo-seccion";
        card.id = `seccionCenso_${section.id}`;
        card.dataset.section = section.id;

        const title = document.createElement("h3");
        title.textContent = section.name;
        const status = document.createElement("p");
        status.id = `estadoSeccion_${section.id}`;
        status.className = "app-photo-help";
        status.setAttribute("role", "status");
        status.setAttribute("aria-live", "polite");
        const addButton = document.createElement("button");
        addButton.type = "button";
        addButton.className = "btn";
        addButton.dataset.action = "add-row";
        addButton.dataset.section = section.id;
        addButton.style.background = "#1565C0";
        addButton.style.color = "white";
        addButton.textContent = "Agregar fila";

        const tableWrap = document.createElement("div");
        tableWrap.className = "censo-tabla-wrap";
        const table = document.createElement("table");
        table.className = "censo-tabla";
        table.id = `tablaCenso_${section.id}`;
        const head = document.createElement("thead");
        const headerRow = document.createElement("tr");
        section.columns.forEach(column => {
            const th = document.createElement("th");
            th.scope = "col";
            th.textContent = column[2];
            headerRow.appendChild(th);
        });
        const actionHeader = document.createElement("th");
        actionHeader.scope = "col";
        actionHeader.textContent = "Acciones";
        headerRow.appendChild(actionHeader);
        head.appendChild(headerRow);

        const body = document.createElement("tbody");
        const foot = document.createElement("tfoot");
        table.append(head, body, foot);
        tableWrap.appendChild(table);

        const resultFields = document.createElement("div");
        resultFields.className = "censo-metadata";
        ["registros", "cantidad", "lamparas", "potenciaW", "consumoAnualKwh"].forEach(key => {
            const field = document.createElement("input");
            field.type = "text";
            field.id = `censoResultado_${section.id}_${key}`;
            field.readOnly = true;
            field.dataset.appState = "true";
            resultFields.appendChild(field);
        });

        card.append(title, status, addButton, tableWrap, resultFields);
        rowIds.forEach(rowId => body.appendChild(createDataRow(section, rowId)));
        updateSection(section, card);
        return card;
    }

    function createDataRow(section, rowId, data = {}) {
        const row = document.createElement("tr");
        row.dataset.censoRow = "true";
        row.dataset.rowId = String(rowId);
        section.columns.forEach(field => {
            const cell = document.createElement("td");
            const input = getRowInput(section, rowId, field);
            if (field[3] !== "calculated" && data[field[1]] !== undefined) input.value = data[field[1]];
            cell.appendChild(input);
            row.appendChild(cell);
        });
        const actionCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "btn";
        removeButton.dataset.action = "remove-row";
        removeButton.dataset.section = section.id;
        removeButton.style.background = "#616161";
        removeButton.style.color = "white";
        removeButton.textContent = "Eliminar";
        removeButton.setAttribute("aria-label", `Eliminar fila ${rowId} de ${section.name}`);
        actionCell.appendChild(removeButton);
        row.appendChild(actionCell);
        recalculateRow(section, row);
        return row;
    }

    function currentRowData(section, row) {
        const values = {};
        section.columns.forEach(field => {
            const input = row.querySelector(`[data-field="${field[1]}"]`);
            values[field[1]] = input?.value.trim() || "";
        });
        return values;
    }

    function calculateRow(section, values) {
        const n = key => {
            const value = values[key];
            return value === "" ? 0 : Number(value);
        };
        if (section.id === "iluminacion") {
            const totalLamparas = n("cantidadLuminarios") * n("lamparasPorLuminario");
            const potenciaTotalW = totalLamparas * n("potenciaLamparaW");
            const horasSemana = n("horasSemanaLaboral") + n("horasFinSemana");
            return { totalLamparas, potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
        }
        if (section.id === "computo") {
            const potenciaTotalW = n("cantidad") * n("potenciaW");
            const horasSemana = -n("horasSemanaLaboral") + n("horasFinSemana");
            return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
        }
        if (section.id === "fuerza") {
            const potenciaTotalW = n("potenciaW") * n("cantidad");
            const horasSemana = n("horasSemanaLaboral") + n("horasFinSemana");
            return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
        }
        if (section.id === "aire_ac") {
            const potenciaTotalW = n("cantidad") * n("potenciaW");
            const horasSemana = n("horasSemanaLaboral") + n("horasFinSemana");
            return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
        }
        const potenciaTotalW = n("cantidad") * n("potenciaW");
        const horasSemana = n("horasSemanaLaboral") + n("horasFinSemana");
        return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
    }

    function recalculateRow(section, row) {
        const result = calculateRow(section, currentRowData(section, row));
        section.columns.filter(field => field[3] === "calculated").forEach(field => {
            const input = row.querySelector(`[data-field="${field[1]}"]`);
            const value = result[field[1]];
            if (input) input.value = Number.isFinite(value) ? String(Number(value.toFixed(6))) : "0";
        });
    }

    function rowHasInput(section, row) {
        const values = currentRowData(section, row);
        return INPUT_COLUMNS.get(section.id).some(field => values[field[1]] !== "");
    }

    function rowOutputs(section, row) {
        return calculateRow(section, currentRowData(section, row));
    }

    function sectionTotals(section, card) {
        const allRows = Array.from(card.querySelectorAll("tbody tr[data-censo-row]"));
        const populated = allRows.filter(row => rowHasInput(section, row));
        const totals = { records: populated.length, quantity: 0, lamps: 0, power: 0, annual: 0 };
        populated.forEach(row => {
            const data = currentRowData(section, row);
            const values = rowOutputs(section, row);
            totals.quantity += numericValue(data[section.quantityKey]);
            totals.lamps += numericValue(values.totalLamparas);
            totals.power += numericValue(values.potenciaTotalW);
            totals.annual += numericValue(values.consumoAnualKwh);
        });
        return { allRows, populated, totals };
    }

    function setResultState(section, totals) {
        const values = {
            registros: totals.records,
            cantidad: totals.quantity,
            lamparas: totals.lamps,
            potenciaW: totals.power,
            consumoAnualKwh: totals.annual
        };
        Object.entries(values).forEach(([key, value]) => {
            const field = document.getElementById(`censoResultado_${section.id}_${key}`);
            if (field) field.value = String(Number(value.toFixed(6)));
        });
    }

    function updateTotalsRow(section, card, populated, totals) {
        const foot = card.querySelector("tfoot");
        foot.replaceChildren();
        foot.hidden = populated.length === 0;
        if (!populated.length) return;

        const row = document.createElement("tr");
        row.className = "censo-total-row";
        section.columns.forEach((field, index) => {
            const cell = document.createElement(index === 0 ? "th" : "td");
            if (index === 0) {
                cell.scope = "row";
                cell.textContent = "Totales de sección";
            } else if (field[1] === section.quantityKey && section.id !== "iluminacion") {
                cell.textContent = String(Number(totals.quantity.toFixed(2)));
            } else if (field[1] === "totalLamparas") {
                cell.textContent = String(Number(totals.lamps.toFixed(2)));
            } else if (field[1] === section.powerKey) {
                cell.textContent = String(Number(totals.power.toFixed(2)));
            } else if (field[1] === section.annualKey) {
                cell.textContent = String(Number(totals.annual.toFixed(6)));
            }
            row.appendChild(cell);
        });
        row.appendChild(document.createElement("td"));
        foot.appendChild(row);
    }

    function updateResultsCard(section, totals) {
        const results = document.getElementById("resultadosCenso");
        const container = document.getElementById("resumenSeccionesCenso");
        let card = container.querySelector(`[data-result-section="${section.id}"]`);
        if (!totals.records) {
            card?.remove();
            return;
        }
        if (!card) {
            card = document.createElement("article");
            card.className = "card";
            card.dataset.resultSection = section.id;
            const title = document.createElement("h4");
            title.textContent = section.name;
            card.appendChild(title);
            const description = document.createElement("p");
            description.dataset.resultText = "true";
            card.appendChild(description);
            container.appendChild(card);
        }
        const description = card.querySelector("[data-result-text]");
        const quantityLabel = section.id === "iluminacion" ? "Lámparas totales" : "Cantidad total";
        description.textContent = `${totals.records} registro(s) · ${quantityLabel}: ${formatNumber(section.id === "iluminacion" ? totals.lamps : totals.quantity)} · Potencia total: ${formatNumber(totals.power)} W · Consumo anual calculado: ${formatNumber(totals.annual)} kWh/año.`;
        results.hidden = false;
    }

    function updateSection(section, card) {
        const { allRows, populated, totals } = sectionTotals(section, card);
        allRows.forEach(row => recalculateRow(section, row));
        const refreshed = sectionTotals(section, card);
        const state = card.querySelector(`[id="estadoSeccion_${section.id}"]`);
        if (state) state.textContent = refreshed.populated.length
            ? `${refreshed.populated.length} registro(s) con datos capturados.`
            : allRows.length ? "Hay filas vacías; aún no hay información capturada en esta sección." : "Sección sin información capturada.";
        updateTotalsRow(section, card, refreshed.populated, refreshed.totals);
        setResultState(section, refreshed.totals);
        updateResultsCard(section, refreshed.totals);
        const present = document.getElementById(`censoPresent_${section.id}`);
        if (present) present.value = "1";
        const ids = refreshed.allRows.map(row => row.dataset.rowId);
        const idsField = document.getElementById(`censoRows_${section.id}`);
        if (idsField) idsField.value = ids.join(",");
    }

    function createSection(section, rowIds, dataRows = []) {
        const card = document.createElement("section");
        card.className = "card censo-seccion";
        card.id = `censoSeccion_${section.id}`;
        card.dataset.section = section.id;
        const heading = document.createElement("h3");
        heading.textContent = section.name;
        const state = document.createElement("p");
        state.id = `estadoSeccion_${section.id}`;
        state.className = "app-photo-help";
        state.setAttribute("role", "status");
        state.setAttribute("aria-live", "polite");
        const add = document.createElement("button");
        add.type = "button";
        add.className = "btn";
        add.dataset.action = "add-row";
        add.dataset.section = section.id;
        add.style.background = "#1565C0";
        add.style.color = "white";
        add.textContent = "Agregar fila";

        const wrapper = document.createElement("div");
        wrapper.className = "censo-tabla-wrap";
        const table = document.createElement("table");
        table.className = "censo-tabla";
        const thead = document.createElement("thead");
        const header = document.createElement("tr");
        section.columns.forEach(field => {
            const th = document.createElement("th");
            th.scope = "col";
            th.textContent = field[2];
            header.appendChild(th);
        });
        const actionHeader = document.createElement("th");
        actionHeader.scope = "col";
        actionHeader.textContent = "Acciones";
        header.appendChild(actionHeader);
        thead.appendChild(header);
        const tbody = document.createElement("tbody");
        const tfoot = document.createElement("tfoot");
        table.append(thead, tbody, tfoot);
        wrapper.appendChild(table);

        const resultsState = document.createElement("div");
        resultsState.className = "censo-metadata";
        ["registros", "cantidad", "lamparas", "potenciaW", "consumoAnualKwh"].forEach(key => {
            const output = document.createElement("input");
            output.type = "text";
            output.id = `censoResultado_${section.id}_${key}`;
            output.readOnly = true;
            output.dataset.appState = "true";
            resultsState.appendChild(output);
        });

        card.append(heading, state, add, wrapper, resultsState);
        if (dataRows.length) {
            dataRows.forEach(row => tbody.appendChild(createRow(section, row.id, row.data)));
        } else {
            rowIds.forEach(rowId => tbody.appendChild(createRow(section, rowId)));
        }
        return card;
    }

    function createRow(section, rowId, data = {}) {
        const row = document.createElement("tr");
        row.dataset.censoRow = "true";
        row.dataset.rowId = String(rowId);
        section.columns.forEach(field => {
            const cell = document.createElement("td");
            const input = document.createElement("input");
            input.id = rowInputId(section.id, rowId, field[1]);
            input.dataset.field = field[1];
            input.setAttribute("aria-label", `${section.name}, fila ${rowId}: ${field[2]}`);
            if (field[3] === "calculated") {
                input.type = "text";
                input.readOnly = true;
                input.className = "censo-calculado";
                input.dataset.appState = "true";
            } else if (field[3] === "number") {
                input.type = "number";
                input.step = "any";
                input.inputMode = "decimal";
                input.className = "censo-numero-entrada";
            } else {
                input.type = "text";
            }
            if (data[field[1]] !== undefined) input.value = data[field[1]];
            cell.appendChild(input);
            row.appendChild(cell);
        });
        const actionCell = document.createElement("td");
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "btn";
        remove.dataset.action = "remove-row";
        remove.dataset.section = section.id;
        remove.style.background = "#616161";
        remove.style.color = "white";
        remove.textContent = "Eliminar";
        remove.setAttribute("aria-label", `Eliminar fila ${rowId} de ${section.name}`);
        actionCell.appendChild(remove);
        row.appendChild(actionCell);
        recalculateRow(section, row);
        return row;
    }

    function rowInputId(sectionId, rowId, fieldKey) {
        return `censo_${sectionId}_${rowId}_${fieldKey}`;
    }

    function rowValues(section, row) {
        const values = {};
        section.columns.forEach(field => {
            const input = row.querySelector(`[data-field="${field[1]}"]`);
            values[field[1]] = input?.value.trim() || "";
        });
        return values;
    }

    function calculateRow(section, values) {
        const number = key => values[key] === "" ? 0 : Number(values[key]);
        switch (section.id) {
            case "iluminacion": {
                const totalLamparas = number("cantidadLuminarios") * number("lamparasPorLuminario");
                const potenciaTotalW = totalLamparas * number("potenciaLamparaW");
                const horasSemana = number("horasSemanaLaboral") + number("horasFinSemana");
                return { totalLamparas, potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
            }
            case "computo": {
                const potenciaTotalW = number("cantidad") * number("potenciaW");
                const horasSemana = -number("horasSemanaLaboral") + number("horasFinSemana");
                return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
            }
            case "fuerza": {
                const potenciaTotalW = number("potenciaW") * number("cantidad");
                const horasSemana = number("horasSemanaLaboral") + number("horasFinSemana");
                return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
            }
            case "aire_ac": {
                const potenciaTotalW = number("cantidad") * number("potenciaW");
                const horasSemana = number("horasSemanaLaboral") + number("horasFinSemana");
                return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
            }
            default: {
                const potenciaTotalW = number("cantidad") * number("potenciaW");
                const horasSemana = number("horasSemanaLaboral") + number("horasFinSemana");
                return { potenciaTotalW, horasSemana, consumoAnualKwh: potenciaTotalW * horasSemana * 52 / 1000 };
            }
        }
    }

    function recalculateRow(section, row) {
        const values = rowValues(section, row);
        const results = calculateRow(section, values);
        section.columns.filter(field => field[3] === "calculated").forEach(field => {
            const input = row.querySelector(`[data-field="${field[1]}"]`);
            const value = results[field[1]];
            if (input) input.value = Number.isFinite(value) ? String(Number(value.toFixed(6))) : "0";
        });
    }

    function rowIsPopulated(section, row) {
        const values = rowValues(section, row);
        return INPUT_COLUMNS.get(section.id).some(field => values[field[1]] !== "");
    }

    function summarizeSection(section, card) {
        const rows = Array.from(card.querySelectorAll("tbody tr[data-censo-row]"));
        const populated = rows.filter(row => rowIsPopulated(section, row));
        const totals = { records: populated.length, quantity: 0, lamps: 0, power: 0, annual: 0 };
        populated.forEach(row => {
            const values = rowValues(section, row);
            const calculated = calculateRow(section, values);
            const inputQuantity = Number(values[section.quantityKey]);
            totals.quantity += Number.isFinite(inputQuantity) ? inputQuantity : 0;
            totals.lamps += calculated.totalLamparas || 0;
            totals.power += calculated.potenciaTotalW || 0;
            totals.annual += calculated.consumoAnualKwh || 0;
        });
        return { rows, populated, totals };
    }

    function updateSection(section, card) {
        const { rows, populated, totals } = summarizeSection(section, card);
        rows.forEach(row => recalculateRow(section, row));
        const status = card.querySelector(`#estadoSeccion_${section.id}`);
        if (status) status.textContent = populated.length
            ? `${populated.length} registro(s) con captura.`
            : rows.length ? "Hay filas vacías; la sección aún no tiene información." : "Sección sin información.";

        const footer = card.querySelector("tfoot");
        footer.replaceChildren();
        footer.hidden = populated.length === 0;
        if (populated.length) {
            const totalRow = document.createElement("tr");
            totalRow.className = "censo-total-row";
            section.columns.forEach((field, index) => {
                const cell = document.createElement(index === 0 ? "th" : "td");
                if (index === 0) {
                    cell.scope = "row";
                    cell.textContent = "Totales de sección";
                } else if (field[1] === section.quantityKey && section.id !== "iluminacion") {
                    cell.textContent = formatNumber(totals.quantity);
                } else if (field[1] === "totalLamparas") {
                    cell.textContent = formatNumber(totals.lamps);
                } else if (field[1] === section.powerKey) {
                    cell.textContent = `${formatNumber(totals.power)} W`;
                } else if (field[1] === section.annualKey) {
                    cell.textContent = `${formatNumber(totals.annual)} kWh/año`;
                }
                totalRow.appendChild(cell);
            });
            totalRow.appendChild(document.createElement("td"));
            footer.appendChild(totalRow);
        }

        const stored = {
            registros: totals.records,
            cantidad: totals.quantity,
            lamparas: totals.lamps,
            potenciaW: totals.power,
            consumoAnualKwh: totals.annual
        };
        Object.entries(stored).forEach(([key, value]) => {
            const field = card.querySelector(`#censoResultado_${section.id}_${key}`);
            if (field) field.value = String(Number(value.toFixed(6)));
        });
        const presentField = document.getElementById(`censoPresent_${section.id}`);
        if (presentField) presentField.value = "1";
        const rowIdsField = document.getElementById(`censoRows_${section.id}`);
        if (rowIdsField) rowIdsField.value = rows.map(row => row.dataset.rowId).join(",");
        updateResults(section, totals);
    }

    function updateResults(section, totals) {
        const resultCard = document.getElementById("resultadosCenso");
        const container = document.getElementById("resumenSeccionesCenso");
        let item = container.querySelector(`[data-result-section="${section.id}"]`);
        if (totals.records === 0) {
            item?.remove();
        } else {
            if (!item) {
                item = document.createElement("article");
                item.className = "card";
                item.dataset.resultSection = section.id;
                const title = document.createElement("h4");
                title.textContent = section.name;
                const details = document.createElement("p");
                details.dataset.resultText = "true";
                item.append(title, details);
                container.appendChild(item);
            }
            item.querySelector("[data-result-text]").textContent = `${totals.records} registros · ${section.id === "iluminacion" ? "Lámparas" : "Cantidad"}: ${formatNumber(section.id === "iluminacion" ? totals.lamps : totals.quantity)} · Potencia: ${formatNumber(totals.power)} W · Consumo: ${formatNumber(totals.annual)} kWh/año.`;
        }
        resultCard.hidden = false;
        if (!container.querySelector("[data-result-section]")) {
            let empty = container.querySelector("[data-no-section-results]");
            if (!empty) {
                empty = document.createElement("p");
                empty.dataset.noSectionResults = "true";
                empty.className = "app-photo-help";
                container.appendChild(empty);
            }
            empty.textContent = "El libro se procesó, pero no hay secciones con registros capturados.";
        } else {
            container.querySelector("[data-no-section-results]")?.remove();
        }
    }

    function renderRowIds(section, rowIds) {
        const card = document.getElementById(`censoSeccion_${section.id}`);
        if (!card) return;
        const body = card.querySelector("tbody");
        body.replaceChildren(...rowIds.map(rowId => createRow(section, rowId)));
        updateSection(section, card);
    }

    function addRow(sectionId, data = null, requestedId = null) {
        const section = sectionById.get(sectionId);
        if (!section) return;
        let card = document.getElementById(`censoSeccion_${sectionId}`);
        if (!card) {
            card = createSection(section, []);
            document.getElementById("seccionesCenso").appendChild(card);
        }
        const body = card.querySelector("tbody");
        const existing = Array.from(body.querySelectorAll("tr[data-censo-row]"))
            .map(row => Number(row.dataset.rowId))
            .filter(Number.isFinite);
        const rowId = requestedId || String((existing.length ? Math.max(...existing) : 0) + 1);
        body.appendChild(createRow(section, rowId, data || {}));
        updateSection(section, card);
        if (!requestedId) window.AEEHState?.save();
    }

    function formatNumber(value) {
        return new Intl.NumberFormat("es-MX", { maximumFractionDigits: 2 }).format(value);
    }

    function parseNumber(value, sheet, cell, label) {
        const trimmed = String(value ?? "").trim();
        if (trimmed === "") return "";
        const parsed = Number(trimmed);
        if (!Number.isFinite(parsed)) throw new Error(`Se esperaba un dato numérico en ${sheet}!${cell} (${label}); se encontró "${trimmed}".`);
        return String(parsed);
    }

    function normalizeHeader(value) {
        return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
    }

    function normalizeZipPath(source, target) {
        if (target.startsWith("/")) return target.slice(1);
        const parts = `${source.slice(0, source.lastIndexOf("/") + 1)}${target}`.split("/");
        const resolved = [];
        parts.forEach(part => {
            if (!part || part === ".") return;
            if (part === "..") resolved.pop();
            else resolved.push(part);
        });
        return resolved.join("/");
    }

    async function createZipReader(file) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        if (bytes.length < 22) throw new Error("El archivo es demasiado pequeño para ser un libro XLSX.");
        const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        let eocd = -1;
        for (let offset = bytes.length - 22; offset >= Math.max(0, bytes.length - 65557); offset--) {
            if (view.getUint32(offset, true) === 0x06054b50) { eocd = offset; break; }
        }
        if (eocd < 0) throw new Error("No se encontró la estructura ZIP. El archivo no parece un XLSX válido.");
        if (view.getUint16(eocd + 4, true) || view.getUint16(eocd + 6, true)) throw new Error("No se admiten libros XLSX divididos en volúmenes.");
        const count = view.getUint16(eocd + 10, true);
        const directoryOffset = view.getUint32(eocd + 16, true);
        if (count === 0xffff || directoryOffset === 0xffffffff) throw new Error("El libro usa ZIP64, que no es compatible con este lector.");
        const entries = new Map();
        const decoder = new TextDecoder("utf-8");
        let offset = directoryOffset;
        for (let index = 0; index < count; index++) {
            if (view.getUint32(offset, true) !== 0x02014b50) throw new Error("El directorio ZIP del libro está dañado.");
            const flags = view.getUint16(offset + 8, true);
            const method = view.getUint16(offset + 10, true);
            const compressedSize = view.getUint32(offset + 20, true);
            const nameLength = view.getUint16(offset + 28, true);
            const extraLength = view.getUint16(offset + 30, true);
            const commentLength = view.getUint16(offset + 32, true);
            const localOffset = view.getUint32(offset + 42, true);
            const name = decoder.decode(bytes.subarray(offset + 46, offset + 46 + nameLength));
            entries.set(name, { flags, method, compressedSize, localOffset });
            offset += 46 + nameLength + extraLength + commentLength;
        }

        async function readBytes(name) {
            const entry = entries.get(name);
            if (!entry) throw new Error(`Falta el componente requerido ${name}.`);
            if (entry.flags & 1) throw new Error("El libro está cifrado y no puede procesarse.");
            const local = entry.localOffset;
            if (view.getUint32(local, true) !== 0x04034b50) throw new Error(`La entrada ${name} tiene una cabecera inválida.`);
            const nameLength = view.getUint16(local + 26, true);
            const extraLength = view.getUint16(local + 28, true);
            const start = local + 30 + nameLength + extraLength;
            const compressed = bytes.slice(start, start + entry.compressedSize);
            if (entry.method === 0) return compressed;
            if (entry.method !== 8) throw new Error(`La compresión ${entry.method} no es compatible (${name}).`);
            const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
            return new Uint8Array(await new Response(stream).arrayBuffer());
        }

        async function readText(name) {
            return new TextDecoder("utf-8").decode(await readBytes(name));
        }

        return { entries, readBytes, readText };
    }

    function parseXml(text, partName) {
        const xml = new DOMParser().parseFromString(text, "application/xml");
        if (Array.from(xml.getElementsByTagNameNS("*", "parsererror")).length) throw new Error(`No se pudo interpretar ${partName}.`);
        return xml;
    }

    function nodes(parent, name) {
        return Array.from(parent.getElementsByTagNameNS("*", name));
    }

    function relationshipMap(xml) {
        return new Map(nodes(xml, "Relationship").map(relationship => [relationship.getAttribute("Id"), relationship.getAttribute("Target")]));
    }

    function columnIndex(reference) {
        const letters = reference.match(/^[A-Z]+/i)?.[0]?.toUpperCase() || "";
        let index = 0;
        for (const letter of letters) index = index * 26 + letter.charCodeAt(0) - 64;
        return index - 1;
    }

    function cellReference(column, row) {
        let value = column + 1;
        let letters = "";
        while (value > 0) {
            const remainder = (value - 1) % 26;
            letters = String.fromCharCode(65 + remainder) + letters;
            value = Math.floor((value - 1) / 26);
        }
        return `${letters}${row}`;
    }

    function cellValue(cell, sharedStrings) {
        if (!cell) return { value: "", formula: null };
        const formula = nodes(cell, "f")[0] || null;
        const valueNode = nodes(cell, "v")[0] || null;
        const type = cell.getAttribute("t");
        let value = valueNode?.textContent || "";
        if (type === "s" && value !== "") value = sharedStrings[Number(value)] ?? "";
        if (type === "inlineStr") value = nodes(cell, "t").map(item => item.textContent).join("");
        return { value, formula };
    }

    async function readOfficialWorkbook(file) {
        if (!/\.xlsx$/i.test(file.name)) throw new Error("Solo se admite el formato oficial XLSX. Los archivos .xls no son compatibles.");
        const zip = await createZipReader(file);
        const workbook = parseXml(await zip.readText("xl/workbook.xml"), "xl/workbook.xml");
        const workbookRels = parseXml(await zip.readText("xl/_rels/workbook.xml.rels"), "xl/_rels/workbook.xml.rels");
        const workbookRelationships = relationshipMap(workbookRels);
        const sharedText = zip.entries.has("xl/sharedStrings.xml") ? await zip.readText("xl/sharedStrings.xml") : "";
        const sharedXml = sharedText ? parseXml(sharedText, "xl/sharedStrings.xml") : null;
        const sharedStrings = sharedXml ? nodes(sharedXml, "si").map(item => nodes(item, "t").map(part => part.textContent).join("")) : [];
        const foundSheets = new Map();
        const sheetNames = [];

        for (const sheetNode of nodes(workbook, "sheet")) {
            const name = sheetNode.getAttribute("name");
            sheetNames.push(name);
            const relationshipId = sheetNode.getAttributeNS("http://schemas.openxmlformats.org/officeDocument/2006/relationships", "id") || sheetNode.getAttribute("r:id");
            const target = workbookRelationships.get(relationshipId);
            if (!target) throw new Error(`No se pudo resolver la hoja ${name}.`);
            const path = normalizeZipPath("xl/workbook.xml", target);
            const xml = parseXml(await zip.readText(path), path);
            const sheetData = nodes(xml, "sheetData")[0];
            const rows = new Map();
            for (const rowNode of nodes(sheetData || xml, "row")) {
                const rowNumber = Number(rowNode.getAttribute("r"));
                const cells = new Map();
                for (const cell of nodes(rowNode, "c")) cells.set(columnIndex(cell.getAttribute("r")), cellValue(cell, sharedStrings));
                rows.set(rowNumber, cells);
            }
            const tablePart = nodes(xml, "tablePart")[0];
            if (!tablePart) throw new Error(`La hoja ${name} no contiene la tabla del formato oficial.`);
            const tableId = tablePart.getAttributeNS("http://schemas.openxmlformats.org/officeDocument/2006/relationships", "id") || tablePart.getAttribute("r:id");
            const relsPath = `${path.slice(0, path.lastIndexOf("/") + 1)}_rels/${path.slice(path.lastIndexOf("/") + 1)}.rels`;
            const sheetRelationships = relationshipMap(parseXml(await zip.readText(relsPath), relsPath));
            const tableTarget = sheetRelationships.get(tableId);
            if (!tableTarget) throw new Error(`No se encontró la tabla asociada con ${name}.`);
            const tablePath = normalizeZipPath(path, tableTarget);
            const tableXml = parseXml(await zip.readText(tablePath), tablePath);
            const table = nodes(tableXml, "table")[0];
            const range = table?.getAttribute("ref") || "";
            const firstTableRow = Number(range.match(/\d+/)?.[0] || 0);
            const lastTableRow = Number(range.match(/:(?:[A-Z]+)(\d+)$/i)?.[1] || firstTableRow);
            const tableColumns = nodes(tableXml, "tableColumn").length;
            foundSheets.set(normalizeName(name), { name, rows, firstTableRow, lastTableRow, tableColumns });
        }

        const missing = SECTIONS.filter(section => !foundSheets.has(normalizeName(section.sheet)));
        if (missing.length) throw new Error(`No corresponde al formato oficial. Faltan hojas: ${missing.map(section => section.sheet).join(", ")}.`);
        const extraSheets = sheetNames.filter(name => !SECTIONS.some(section => normalizeName(section.sheet) === normalizeName(name)));
        const parsedSections = [];

        for (const section of SECTIONS) {
            const sheet = foundSheets.get(normalizeName(section.sheet));
            if (sheet.tableColumns !== section.columns.length) {
                throw new Error(`La tabla de ${section.sheet} tiene ${sheet.tableColumns} columnas; se esperaban ${section.columns.length}.`);
            }
            for (let index = 0; index < section.columns.length; index++) {
                const expected = section.columns[index][2];
                const headerCell = sheet.rows.get(section.headerRow)?.get(index);
                const actual = cellValue(headerCell, sharedStrings).value;
                if (normalizeName(actual) !== normalizeName(expected)) {
                    throw new Error(`Encabezado incorrecto en ${section.sheet}!${cellReference(index, section.headerRow)}: esperado "${expected}", recibido "${actual || "vacío"}".`);
                }
            }

            const firstDataRow = sheet.firstTableRow + 1;
            if (firstDataRow <= section.headerRow || firstDataRow > sheet.lastTableRow) {
                throw new Error(`La tabla de ${section.sheet} no coincide con la ubicación de los encabezados.`);
            }
            for (const [column, template] of Object.entries(section.formulas)) {
                const formulaNode = sheet.rows.get(firstDataRow)?.get(columnIndex(column))?.formula;
                const actual = formulaNode?.textContent?.replace(/\$/g, "").replace(/\s/g, "").toUpperCase() || "";
                const expected = template.replace(/\{r\}/g, String(firstDataRow)).replace(/\$/g, "").replace(/\s/g, "").toUpperCase();
                if (actual !== expected) throw new Error(`La fórmula de ${section.sheet}!${column}${firstDataRow} no coincide: esperada ${expected}, recibida ${actual || "sin fórmula"}.`);
            }

            const importedRows = [];
            for (let rowNumber = firstDataRow; rowNumber <= sheet.lastTableRow; rowNumber++) {
                const rowCells = sheet.rows.get(rowNumber) || new Map();
                const data = {};
                let hasInput = false;
                for (const [column, key, label, kind] of section.columns) {
                    if (kind === "calculated") continue;
                    const parsed = cellValue(rowCells.get(columnIndex(column)), sharedStrings);
                    if (parsed.formula) continue;
                    let value = String(parsed.value ?? "").trim();
                    if (/^columna\s*\d+$/i.test(value)) value = "";
                    if (kind === "number" && value !== "") {
                        const numeric = Number(value);
                        if (!Number.isFinite(numeric)) throw new Error(`Se esperaba un número en ${section.sheet}!${column}${rowNumber} (${label}); se encontró "${value}".`);
                        value = String(numeric);
                    }
                    data[key] = value;
                    if (value !== "") hasInput = true;
                }
                if (hasInput) importedRows.push({ id: String(rowNumber), data });
            }
            parsedSections.push({ section, rows: importedRows });
        }

        return { sections: parsedSections, sheetNames, extraSheets };
    }

    function formatNumber(value) {
        return new Intl.NumberFormat("es-MX", { maximumFractionDigits: 2 }).format(value);
    }

    function updateLogoPreview() {
        const selector = document.getElementById("logotipoDependencia");
        const status = document.getElementById("estadoLogotipoDependencia");
        const image = document.getElementById("vistaLogotipoDependencia");
        const remove = document.getElementById("eliminarLogotipoDependencia");
        const preview = window.AEEHState?.getFilePreviews(selector.id)[0];
        if (!preview) {
            image.hidden = true;
            image.removeAttribute("src");
            remove.hidden = true;
            status.textContent = "Sin logotipo de dependencia seleccionado.";
            return;
        }
        image.src = preview.dataUrl;
        image.hidden = false;
        remove.hidden = false;
        status.textContent = `Vista previa temporal: ${preview.name}. No se inserta en el XLSX original.`;
    }

    async function logoPreview(file) {
        if (typeof createImageBitmap !== "function") throw new Error("El navegador no permite preparar una vista previa de imagen.");
        const bitmap = await createImageBitmap(file);
        const scale = Math.min(1, 640 / Math.max(bitmap.width, bitmap.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(bitmap.width * scale));
        canvas.height = Math.max(1, Math.round(bitmap.height * scale));
        canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();
        const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
        if (!blob) throw new Error("No se pudo preparar la imagen.");
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(blob);
        });
    }

    async function processFile() {
        const selector = document.getElementById("archivoExcel");
        const status = document.getElementById("estadoCenso");
        const detail = document.getElementById("detalleCenso");
        const button = document.getElementById("procesarArchivoBtn");
        const file = selector.files?.[0];
        if (!file) {
            status.textContent = "Seleccione un archivo XLSX antes de procesar.";
            detail.textContent = "";
            return;
        }

        button.disabled = true;
        status.textContent = `Leyendo ${file.name}…`;
        detail.textContent = "Se están validando las ocho hojas, sus encabezados y fórmulas.";
        try {
            const workbook = await readOfficialWorkbook(file);
            const previews = window.AEEHState.getFilePreviews("logotipoDependencia");
            if (!window.AEEHState.clearCurrentModuleState()) throw new Error("No se pudo reemplazar el estado anterior del Censo; no se cargó el nuevo archivo.");
            if (previews.length) window.AEEHState.setFilePreviews("logotipoDependencia", previews);

            const sectionsContainer = document.getElementById("seccionesCenso");
            sectionsContainer.replaceChildren();
            document.getElementById("resumenSeccionesCenso").replaceChildren();
            document.getElementById("censoSchemaVersion").value = "1";
            document.getElementById("censoNombreArchivo").value = file.name;
            document.getElementById("censoHojasProcesadas").value = workbook.sheetNames.join(" | ");

            workbook.sections.forEach(({ section, rows }) => {
                const rowIds = rows.map(row => row.id);
                const card = createSectionCard(section, rowIds, rows);
                sectionsContainer.appendChild(card);
                setMetadata(section, true, rowIds);
                updateSection(section, card);
            });

            document.getElementById("resultadosCenso").hidden = false;
            const extraMessage = workbook.extraSheets.length
                ? ` Se ignoraron hojas no contempladas: ${workbook.extraSheets.join(", ")}.`
                : "";
            status.textContent = `Formato válido: ${workbook.sheetNames.length} hojas leídas desde ${file.name}.`;
            const recordCount = workbook.sections.reduce((total, item) => total + item.rows.length, 0);
            detail.textContent = `${recordCount} registros con datos; las filas vacías y los valores ColumnaN del formato se ignoraron. Las fórmulas se recalculan en la plataforma.${extraMessage}`;
            const saved = window.AEEHState.save();
            if (!saved) status.textContent = "El archivo se procesó, pero no pudo guardarse en el estado local de la sesión.";
        } catch (error) {
            status.textContent = "No se pudo procesar el archivo.";
            detail.textContent = error.message;
        } finally {
            button.disabled = false;
            updateLogoPreview();
        }
    }

    function restoreProcessedData() {
        const saved = window.AEEHState?.getModuleFields("censo_carga.html") || {};
        if (saved.censoSchemaVersion !== "1" || !saved.censoNombreArchivo) return;
        const container = document.getElementById("seccionesCenso");
        container.replaceChildren();
        let totalRows = 0;
        SECTIONS.forEach(section => {
            if (saved[`censoPresent_${section.id}`] !== "1") return;
            const rowIds = String(saved[`censoRows_${section.id}`] || "").split(",").filter(Boolean);
            const card = createSectionCard(section, rowIds);
            container.appendChild(card);
            totalRows += rowIds.length;
        });
        window.AEEHState.restore();
        SECTIONS.forEach(section => {
            const card = document.getElementById(`censoSeccion_${section.id}`);
            if (card) updateSection(section, card);
        });
        document.getElementById("resultadosCenso").hidden = false;
        document.getElementById("estadoCenso").textContent = `Captura restaurada desde ${saved.censoNombreArchivo}.`;
        document.getElementById("detalleCenso").textContent = `${totalRows} filas restauradas del estado de esta sesión. El archivo original debe volver a seleccionarse para reprocesarlo.`;
    }

    function addSectionRow(sectionId) {
        const section = sectionById.get(sectionId);
        const card = document.getElementById(`censoSeccion_${sectionId}`);
        if (!section || !card) return;
        const rowIds = Array.from(card.querySelectorAll("tbody tr[data-censo-row]" )).map(row => row.dataset.rowId);
        const numericIds = rowIds.map(Number).filter(Number.isFinite);
        const nextId = String((numericIds.length ? Math.max(...numericIds) : section.dataStart - 1) + 1);
        const row = createRow(section, nextId);
        card.querySelector("tbody").appendChild(row);
        updateSection(section, card);
        window.AEEHState.save();
    }

    function removeSectionRow(sectionId, rowElement) {
        const section = sectionById.get(sectionId);
        const card = document.getElementById(`censoSeccion_${sectionId}`);
        if (!section || !card) return;
        rowElement.remove();
        updateSection(section, card);
        window.AEEHState.save();
    }

    function downloadTemplate() {
        const link = document.createElement("a");
        link.href = "Formato/Censo de Carga.xlsx";
        link.download = "Censo de Carga.xlsx";
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    function save() {
        const saved = window.AEEHState?.save() || false;
        const status = document.getElementById("estadoCenso");
        if (saved && document.getElementById("censoNombreArchivo").value) {
            status.textContent = "Cambios del Censo guardados temporalmente en esta sesión.";
        } else if (!saved) {
            status.textContent = "No fue posible guardar los cambios en el estado local.";
        }
        return saved;
    }

    function back() {
        if (!save()) return;
        window.location.href = "evaluacion_sitio.html";
    }

    function continueToBaseline() {
        if (!save()) {
            alert("No fue posible guardar el estado del Censo; no se avanzó.");
            return;
        }
        window.location.href = "linea_base.html";
    }

    function logout() {
        if (confirm("¿Desea cerrar la sesión?")) {
            sessionStorage.clear();
            window.location.href = "index.html";
        }
    }

    async function selectLogo(event) {
        const file = event.target.files?.[0];
        if (!file) return;
        try {
            const dataUrl = await logoPreview(file);
            const saved = window.AEEHState.setFilePreviews("logotipoDependencia", [{ name: file.name, dataUrl }]);
            window.AEEHState.save();
            updateLogoPreview();
            if (!saved) document.getElementById("estadoLogotipoDependencia").textContent = "Vista previa disponible solo mientras la página permanezca abierta; no cupo en el estado de sesión.";
        } catch (error) {
            document.getElementById("estadoLogotipoDependencia").textContent = `No se pudo leer el logotipo: ${error.message}`;
        }
    }

    function initialize() {
        const pageNumber = document.getElementById("numeroPagina");
        if (pageNumber) pageNumber.textContent = "Página 8 de 9";
        const name = sessionStorage.getItem("nombre");
        if (name) document.getElementById("nombreUsuario").textContent = `👤 ${name}`;
        restoreProcessedData();
        updateLogoPreview();
        document.getElementById("archivoExcel").addEventListener("change", () => {
            const file = document.getElementById("archivoExcel").files?.[0];
            if (file) {
                document.getElementById("estadoCenso").textContent = `Archivo seleccionado: ${file.name}. Presione Procesar Archivo para validarlo.`;
                window.AEEHState.save();
            }
        });
        document.getElementById("logotipoDependencia").addEventListener("change", selectLogo);
        document.getElementById("eliminarLogotipoDependencia").addEventListener("click", () => {
            document.getElementById("logotipoDependencia").value = "";
            window.AEEHState.setFilePreviews("logotipoDependencia", []);
            window.AEEHState.save();
            updateLogoPreview();
        });

        const sections = document.getElementById("seccionesCenso");
        sections.addEventListener("input", event => {
            const row = event.target.closest("tr[data-censo-row]");
            if (!row) return;
            const section = sectionById.get(row.closest("section[data-section]")?.dataset.section);
            if (!section) return;
            recalculateRow(section, row);
            updateSection(section, row.closest("section[data-section]"));
        });
        sections.addEventListener("change", event => {
            const row = event.target.closest("tr[data-censo-row]");
            if (!row) return;
            const section = sectionById.get(row.closest("section[data-section]")?.dataset.section);
            if (section) updateSection(section, row.closest("section[data-section]"));
        });
        sections.addEventListener("click", event => {
            const button = event.target.closest("button[data-action]");
            if (!button) return;
            if (button.dataset.action === "add-row") addSectionRow(button.dataset.section);
            if (button.dataset.action === "remove-row") removeSectionRow(button.dataset.section, button.closest("tr[data-censo-row]"));
        });
    }

    window.descargarFormato = downloadTemplate;
    window.procesarArchivo = processFile;
    window.regresar = back;
    window.guardar = save;
    window.continuar = continueToBaseline;
    window.cerrarSesion = logout;
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
})();