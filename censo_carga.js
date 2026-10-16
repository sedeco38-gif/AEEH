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
            formulas: { I: "F{r}*H{r}", L: "J{r}+K{r}", M: "I{r}*L{r}*52/1000" },
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
        if (!node || (typeof node.getElementsByTagNameNS !== "function" && typeof node.getElementsByTagName !== "function")) {
            return [];
        }
        if (typeof node.getElementsByTagNameNS === "function") {
            return Array.from(node.getElementsByTagNameNS("*", localName));
        }
        return Array.from(node.getElementsByTagName(localName));
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
                const parsedCell = sheet.rows.get(section.headerRow)?.get(columnIndex);
                const actual = parsedCell?.value || "";
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

    async function readOfficialWorkbook(file) {
        return parseWorkbook(file);
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
                const horasSemana = n("horasSemanaLaboral") + n("horasFinSemana");
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
        input.dataset.appStateIgnore = "true";
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

    function createSectionCard(section, rowIds, rows = []) {
        const card = document.createElement("section");
        card.className = "card censo-seccion";
        card.id = `seccionCenso_${section.id}`;
        card.dataset.section = section.id;
        card.dataset.sectionPresent = censusStore.services[activeServiceId]?.sections?.[section.id]?.present ? "true" : "false";

        const title = document.createElement("h3");
        title.textContent = section.name;
        const reviewFieldset = document.createElement("fieldset");
        reviewFieldset.className = "censo-revision-categoria";
        const reviewLegend = document.createElement("legend");
        reviewLegend.textContent = "Revisión de esta categoría";
        reviewFieldset.appendChild(reviewLegend);
        const savedReview = censusStore.services[activeServiceId]?.categoryReview?.[section.id];
        const reviewOptions = [
            { value: "true", label: "Hay equipos en esta categoría." },
            { value: "false", label: "No hay equipos de esta categoría en el inmueble." }
        ];
        reviewOptions.forEach((option, index) => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `revision-${activeServiceId}-${section.id}`;
            input.value = option.value;
            input.dataset.categoryReview = "true";
            input.dataset.section = section.id;
            input.id = `revision-${activeServiceId}-${section.id}-${index}`;
            input.checked = savedReview?.reviewed === true &&
                savedReview.equipmentPresent === (option.value === "true");
            label.htmlFor = input.id;
            label.append(input, document.createTextNode(` ${option.label}`));
            reviewFieldset.appendChild(label);
        });
        const reviewStatus = document.createElement("p");
        reviewStatus.id = `estadoRevision_${section.id}`;
        reviewStatus.className = "app-photo-help";
        reviewStatus.setAttribute("role", "status");
        reviewStatus.setAttribute("aria-live", "polite");
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

        card.append(title, reviewFieldset, reviewStatus, status, addButton, tableWrap, resultFields);
        const dataById = new Map((rows || []).map(row => [String(row.id), row.data || {}]));
        rowIds.forEach(rowId => {
            const data = dataById.get(String(rowId)) || {};
            body.appendChild(createDataRow(section, rowId, data));
        });
        updateSection(section, card);
        return card;
    }

    function updateCategoryReviewStatus(section, card) {
        const status = card.querySelector(`#estadoRevision_${section.id}`);
        if (!status) return;
        const review = censusStore.services[activeServiceId]?.categoryReview?.[section.id];
        if (!review?.reviewed) {
            status.textContent = "Pendiente de revisión.";
            return;
        }
        const rows = Array.from(card.querySelectorAll("tbody tr[data-censo-row]"));
        const rowsWithData = rows.filter(row => rowIsPopulated(section, row));
        const incompleteRows = rowsWithData.filter(row => !rowIsComplete(section, row));
        if (review.equipmentPresent === false) {
            status.textContent = rowsWithData.length
                ? "Revisión inconsistente: se declaró que no hay equipos, pero existen filas con datos. Corrija la declaración o elimine esas filas."
                : "Revisada sin equipos.";
            return;
        }
        if (!rowsWithData.length) {
            status.textContent = "Hay equipos declarados, pero faltan registros. Agregue una fila o confirme «No hay equipos» si corresponde.";
        } else if (incompleteRows.length) {
            status.textContent = `Revisada con filas incompletas: ${incompleteRows.length} fila(s). Complete los datos o elimine las filas.`;
        } else {
            status.textContent = "Revisada con equipos; todas las filas capturadas están completas.";
        }
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
            const horasSemana = n("horasSemanaLaboral") + n("horasFinSemana");
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
        card.id = `seccionCenso_${section.id}`;
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
            input.dataset.appStateIgnore = "true";
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
                const horasSemana = number("horasSemanaLaboral") + number("horasFinSemana");
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
        const complete = requiredKeysForSection(section).every(key =>
            values[key] !== "" && Number.isFinite(Number(values[key]))
        );
        section.columns.filter(field => field[3] === "calculated").forEach(field => {
            const input = row.querySelector(`[data-field="${field[1]}"]`);
            const value = results[field[1]];
            if (input) {
                input.value = !complete
                    ? ""
                    : Number.isFinite(value) ? String(Number(value.toFixed(6))) : "0";
            }
        });
    }

    function rowIsPopulated(section, row) {
        const values = rowValues(section, row);
        return INPUT_COLUMNS.get(section.id).some(field => values[field[1]] !== "");
    }

    function requiredRowFields(section) {
        return section.id === "iluminacion"
            ? ["cantidadLuminarios", "lamparasPorLuminario", "potenciaLamparaW", "horasSemanaLaboral", "horasFinSemana"]
            : ["cantidad", "potenciaW", "horasSemanaLaboral", "horasFinSemana"];
    }

    function rowIsComplete(section, row) {
        const values = rowValues(section, row);
        return requiredRowFields(section).every(key =>
            values[key] !== "" && Number.isFinite(Number(values[key]))
        );
    }

    function summarizeSection(section, card) {
        const rows = Array.from(card.querySelectorAll("tbody tr[data-censo-row]"));
        const populated = rows.filter(row => rowIsPopulated(section, row) && rowIsComplete(section, row));
        const incomplete = rows.filter(row => rowIsPopulated(section, row) && !rowIsComplete(section, row));
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
        return { rows, populated, incomplete, totals };
    }

    function updateSection(section, card) {
        const { rows, populated, incomplete, totals } = summarizeSection(section, card);
        rows.forEach(row => recalculateRow(section, row));
        const status = card.querySelector(`#estadoSeccion_${section.id}`);
        if (status) {
            const parts = [];
            if (populated.length) parts.push(`${populated.length} registro(s) completo(s).`);
            if (incomplete.length) parts.push(`${incomplete.length} fila(s) incompleta(s); no se incluyen en los resultados.`);
            if (!parts.length) parts.push(rows.length ? "Hay filas vacías; la sección aún no tiene información." : "Sección sin información.");
            status.textContent = parts.join(" ");
        }

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
        const incompleteField = ensureResultField(section, "incompletos");
        incompleteField.value = String(incomplete.length);
        const presentField = document.getElementById(`censoPresent_${section.id}`);
        if (presentField && (card.dataset.sectionPresent === "true" || rows.length)) presentField.value = "1";
        const rowIdsField = document.getElementById(`censoRows_${section.id}`);
        if (rowIdsField) rowIdsField.value = rows.map(row => row.dataset.rowId).join(",");
        updateResults(section, totals, incomplete.length);
        updateCategoryReviewStatus(section, card);
    }

    function updateResults(section, totals, incompleteCount = 0) {
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
            item.querySelector("[data-result-text]").textContent = `${totals.records} registros completos · ${section.id === "iluminacion" ? "Lámparas" : "Cantidad"}: ${formatNumber(section.id === "iluminacion" ? totals.lamps : totals.quantity)} · Potencia: ${formatNumber(totals.power)} W · Consumo: ${formatNumber(totals.annual)} kWh/año.${incompleteCount ? ` ${incompleteCount} fila(s) incompleta(s) excluida(s).` : ""}`;
        }

        const hasVisibleResults = Boolean(container.querySelector("[data-result-section]"));
        resultCard.hidden = !hasVisibleResults;
        if (!hasVisibleResults) {
            let empty = container.querySelector("[data-no-section-results]");
            if (!empty) {
                empty = document.createElement("p");
                empty.dataset.noSectionResults = "true";
                empty.className = "app-photo-help";
                container.appendChild(empty);
            }
            const hasIncompleteRows = Array.from(document.querySelectorAll(".censo-seccion"))
                .some(card => Number(card.querySelector(`[id^="censoResultado_"][id$="_incompletos"]`)?.value || 0) > 0);
            empty.textContent = hasIncompleteRows
                ? "No hay registros completos. Las filas parciales se conservan, pero no se incluyen en los resultados."
                : "El libro se procesó, pero no hay secciones con registros completos.";
        } else {
            container.querySelector("[data-no-section-results]")?.remove();
        }
    }

    function renderRowIds(section, rowIds) {
        const card = document.getElementById(`seccionCenso_${section.id}`);
        if (!card) return;
        const body = card.querySelector("tbody");
        body.replaceChildren(...rowIds.map(rowId => createRow(section, rowId)));
        updateSection(section, card);
    }

    function addRow(sectionId, data = null, requestedId = null) {
        const section = sectionById.get(sectionId);
        if (!section) return;
        let card = document.getElementById(`seccionCenso_${sectionId}`);
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

    const CENSUS_DATA_KEY = "censosPorServicio";
    let censusStore = { version: 1, services: {}, unassigned: [], migration: { legacyHandled: false } };
    let availableServices = [];
    let activeServiceId = "";
    let suppressServiceChange = false;
    let serviceIdentitiesReady = true;

    function newStableId(prefix) {
        return `${prefix}-${crypto.randomUUID
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2)}`}`;
    }

    function loadCensusStore() {
        const stored = window.AEEHState?.getModuleData("censo_carga.html", CENSUS_DATA_KEY);
        if (stored && stored.version === 1 && stored.services && Array.isArray(stored.unassigned)) {
            censusStore = {
                ...stored,
                services: stored.services,
                unassigned: stored.unassigned,
                migration: stored.migration || { legacyHandled: false }
            };
        }
    }

    function persistCensusStore(store = censusStore) {
        return Boolean(window.AEEHState?.setModuleData("censo_carga.html", CENSUS_DATA_KEY, store));
    }

    function getServiceDirectory() {
        const fields = window.AEEHState?.getModuleFields("servicios_electricos.html") || {};
        const count = Math.max(0, Number.parseInt(fields.cantidadMedidores, 10) || 0);
        const identityState = window.AEEHState?.getModuleData(
            "servicios_electricos.html",
            "identidadesServicios"
        ) || { version: 1, activeCount: 0, activeByIndex: {}, known: {} };
        const activeByIndex = { ...(identityState.activeByIndex || {}) };
        const known = { ...(identityState.known || {}) };
        const previousCount = Math.max(0, Number.parseInt(identityState.activeCount, 10) || 0);
        if (count < previousCount) {
            for (let index = count + 1; index <= previousCount; index++) {
                const inactiveId = activeByIndex[index];
                if (inactiveId && known[inactiveId]) known[inactiveId].active = false;
                delete activeByIndex[index];
            }
        }
        if (count > previousCount) {
            for (let index = previousCount + 1; index <= count; index++) {
                const archivedId = activeByIndex[index];
                if (archivedId && known[archivedId]) known[archivedId].active = false;
                delete activeByIndex[index];
            }
        }
        const directory = [];

        for (let index = 1; index <= count; index++) {
            const serviceId = String(fields[`servicioIdentidad_${index}`] || activeByIndex[index] || newStableId("servicio"));
            const serviceNumber = String(fields[`servicio_${index}`] || "").trim();
            activeByIndex[index] = serviceId;
            known[serviceId] = { index, numeroCfe: serviceNumber, active: true };
            directory.push({
                id: serviceId,
                index,
                serviceNumber,
                label: serviceNumber
                    ? `Servicio ${index} · ${serviceNumber}`
                    : `Servicio ${index} · Número CFE pendiente`
            });
        }

        const nextIdentityState = {
            version: 1,
            activeCount: count,
            activeByIndex,
            known
        };
        if (count !== previousCount ||
            JSON.stringify(activeByIndex) !== JSON.stringify(identityState.activeByIndex || {})) {
            serviceIdentitiesReady = Boolean(window.AEEHState?.setModuleData(
                "servicios_electricos.html",
                "identidadesServicios",
                nextIdentityState
            ));
            if (!serviceIdentitiesReady) {
                document.getElementById("estadoServicioCenso").textContent =
                    "No fue posible conservar la identidad de los servicios. No importe el Censo hasta resolver el almacenamiento.";
            }
        }
        return directory;
    }

    function buildLegacyCensus(fields) {
        if (fields.censoSchemaVersion !== "1" || !fields.censoNombreArchivo) return null;
        const sections = {};
        SECTIONS.forEach(section => {
            if (fields[`censoPresent_${section.id}`] !== "1") return;
            const rowIds = String(fields[`censoRows_${section.id}`] || "").split(",").filter(Boolean);
            const rows = rowIds.map(rowId => {
                const data = {};
                section.columns.filter(column => column[3] !== "calculated").forEach(column => {
                    data[column[1]] = String(fields[rowFieldId(section.id, rowId, column[1])] ?? "");
                });
                return { id: String(rowId), data };
            });
            sections[section.id] = { present: true, rows };
        });
        return {
            fileName: String(fields.censoNombreArchivo),
            sheetNames: String(fields.censoHojasProcesadas || "").split(" | ").filter(Boolean),
            sections,
            legacy: true
        };
    }

    function migrateLegacyCensus() {
        if (censusStore.migration.legacyHandled) return;
        const legacy = buildLegacyCensus(window.AEEHState?.getModuleFields("censo_carga.html") || {});
        const migration = { ...censusStore.migration, legacyHandled: true };
        if (legacy) {
            if (availableServices.length === 1) {
                const service = availableServices[0];
                censusStore.services[service.id] = {
                    ...legacy,
                    summary: summarizeCensus(legacy),
                    serviceId: service.id,
                    serviceIndex: service.index,
                    serviceNumber: service.serviceNumber
                };
                migration.message = `El Censo anterior se asoció a ${service.label}; revise que corresponda al único servicio registrado.`;
            } else {
                censusStore.unassigned.push({
                    id: newStableId("censo-legado"),
                    label: "Censo anterior sin asignar",
                    census: legacy
                });
                migration.message = availableServices.length
                    ? "Se conservó el Censo anterior sin asignar. Elija expresamente el servicio al que pertenece."
                    : "Se conservó el Censo anterior sin asignar. Registre primero los servicios eléctricos para poder asociarlo.";
            }
        }
        const nextStore = { ...censusStore, migration };
        if (persistCensusStore(nextStore)) {
            censusStore = nextStore;
        } else {
            migration.legacyHandled = false;
            migration.message = "No fue posible guardar la migración del Censo anterior; no se eliminó el estado legado.";
            censusStore.migration = migration;
        }
    }

    function requiredKeysForSection(section) {
        return section.id === "iluminacion"
            ? ["cantidadLuminarios", "lamparasPorLuminario", "potenciaLamparaW", "horasSemanaLaboral", "horasFinSemana"]
            : ["cantidad", "potenciaW", "horasSemanaLaboral", "horasFinSemana"];
    }

    function classifyStoredRow(section, row) {
        const values = row.data || {};
        const hasInput = INPUT_COLUMNS.get(section.id).some(column => String(values[column[1]] ?? "").trim() !== "");
        if (!hasInput) return "empty";
        const complete = requiredKeysForSection(section).every(key =>
            String(values[key] ?? "").trim() !== "" && Number.isFinite(Number(values[key]))
        );
        return complete ? "complete" : "incomplete";
    }

    function summarizeCensus(census) {
        const summary = { records: 0, incomplete: 0, power: 0, annual: 0 };
        SECTIONS.forEach(section => {
            const sectionData = census?.sections?.[section.id];
            (sectionData?.rows || []).forEach(row => {
                const classification = classifyStoredRow(section, row);
                if (classification === "incomplete") {
                    summary.incomplete++;
                    return;
                }
                if (classification !== "complete") return;
                const calculated = computeRow(section, row.data || {});
                summary.records++;
                summary.power += calculated.potenciaTotalW || 0;
                summary.annual += calculated.consumoAnualKwh || 0;
            });
        });
        return summary;
    }

    function censusHasInformation(census) {
        return Boolean(census?.fileName) || summarizeCensus(census).records > 0 ||
            summarizeCensus(census).incomplete > 0;
    }

    function censusForService(service) {
        const census = censusStore.services[service.id];
        if (!census) return null;
        census.serviceId = service.id;
        census.serviceIndex = service.index;
        census.serviceNumber = service.serviceNumber;
        return census;
    }

    function updateServiceSelector(preferredServiceId = "") {
        const selector = document.getElementById("servicioCensoSeleccionado");
        const saved = window.AEEHState?.getModuleFields("censo_carga.html") || {};
        const requested = preferredServiceId || saved.servicioCensoSeleccionado || "";
        selector.replaceChildren(new Option("Seleccione un servicio eléctrico...", ""));
        availableServices = getServiceDirectory();
        availableServices.forEach(service => selector.add(new Option(service.label, service.id)));
        const selectionExists = availableServices.some(service => service.id === requested);
        activeServiceId = selectionExists
            ? requested
            : availableServices.length === 1
                ? availableServices[0].id
                : "";
        suppressServiceChange = true;
        selector.value = activeServiceId;
        suppressServiceChange = false;
        const noServices = availableServices.length === 0;
        const canUseServices = !noServices && serviceIdentitiesReady;
        selector.disabled = !canUseServices;
        document.getElementById("archivoExcel").disabled = !canUseServices;
        document.getElementById("procesarArchivoBtn").disabled = !canUseServices;
        if (noServices) {
            document.getElementById("estadoServicioCenso").textContent =
                "Primero registre al menos un servicio eléctrico en el módulo Servicios Eléctricos.";
            document.getElementById("seccionesCenso").replaceChildren();
            document.getElementById("resultadosCenso").hidden = true;
        } else if (!serviceIdentitiesReady) {
            document.getElementById("estadoServicioCenso").textContent =
                "No se pudo conservar una identidad estable para los servicios; resuelva el almacenamiento antes de capturar.";
            document.getElementById("seccionesCenso").replaceChildren();
            document.getElementById("resultadosCenso").hidden = true;
        } else if (availableServices.length > 1 && !activeServiceId) {
            document.getElementById("estadoServicioCenso").textContent =
                "Seleccione explícitamente el servicio antes de importar o editar un Censo.";
        } else {
            document.getElementById("estadoServicioCenso").textContent =
                censusStore.migration.message || "";
            renderCensusForService();
        }
        renderPendingAssignments();
        if (window.AEEHState && !window.AEEHState.save()) {
            document.getElementById("estadoServicioCenso").textContent =
                "No se pudo guardar la selección del servicio en el estado del módulo.";
        }
    }

    function renderCensusForService() {
        const container = document.getElementById("seccionesCenso");
        const resultsCard = document.getElementById("resultadosCenso");
        const results = document.getElementById("resumenSeccionesCenso");
        container.replaceChildren();
        results.replaceChildren();
        if (!activeServiceId) {
            resultsCard.hidden = true;
            return;
        }
        const service = availableServices.find(item => item.id === activeServiceId);
        const census = service ? censusForService(service) : null;
        if (!census) {
            document.getElementById("estadoCenso").textContent = "Sin Censo guardado para el servicio seleccionado.";
            document.getElementById("detalleCenso").textContent = "Puede importar el formato oficial o agregar registros desde una sección después de procesar un libro.";
            resultsCard.hidden = true;
            return;
        }
        SECTIONS.forEach(section => {
            const sectionData = census.sections?.[section.id];
            const rows = sectionData?.present ? sectionData.rows || [] : [];
            const rowIds = rows.map(row => String(row.id));
            const card = createSectionCard(section, rowIds, rows);
            container.appendChild(card);
            updateSection(section, card);
        });
        const summary = summarizeCensus(census);
        document.getElementById("estadoCenso").textContent =
            `Censo de ${service.label}${census.fileName ? ` · ${census.fileName}` : ""}.`;
        document.getElementById("detalleCenso").textContent =
            `${summary.records} registro(s) completo(s); ${summary.incomplete} fila(s) incompleta(s) excluida(s). El archivo original debe seleccionarse de nuevo para reprocesarlo.`;
        resultsCard.hidden = false;
    }

    function renderPendingAssignments() {
        const container = document.getElementById("censosPendientesAsignacion");
        container.replaceChildren();
        const activeIds = new Set(availableServices.map(service => service.id));
        const pending = [
            ...censusStore.unassigned.map(item => ({ id: item.id, label: item.label, census: item.census, unassigned: true })),
            ...Object.entries(censusStore.services)
                .filter(([serviceId, census]) => !activeIds.has(serviceId) && censusHasInformation(census))
                .map(([serviceId, census]) => ({
                    id: serviceId,
                    label: `Censo de servicio anterior${census.serviceIndex ? ` ${census.serviceIndex}` : ""} sin servicio vigente`,
                    census,
                    unassigned: false
                }))
        ];
        if (!pending.length) return;
        const heading = document.createElement("p");
        heading.className = "texto-ayuda";
        heading.textContent = availableServices.length
            ? "Hay censos sin servicio vigente o pendientes de asociación. Elija expresamente su destino; no se reasignan automáticamente."
            : "Hay censos conservados sin servicios vigentes. Registre servicios eléctricos y asigne cada Censo explícitamente.";
        container.appendChild(heading);
        pending.forEach(item => {
            const row = document.createElement("div");
            row.className = "grid";
            const label = document.createElement("p");
            label.textContent = `${item.label}: ${summarizeCensus(item.census).records} registro(s) completo(s), ${summarizeCensus(item.census).incomplete} incompleto(s).`;
            row.appendChild(label);
            if (availableServices.length) {
                const select = document.createElement("select");
                select.className = "input-select";
                select.dataset.pendingCensus = item.id;
                select.add(new Option("Seleccione el servicio destino...", ""));
                availableServices.forEach(service => select.add(new Option(service.label, service.id)));
                const assign = document.createElement("button");
                assign.type = "button";
                assign.className = "btn";
                assign.dataset.assignCensus = item.id;
                assign.textContent = "Asociar Censo";
                row.append(select, assign);
            }
            container.appendChild(row);
        });
    }

    function saveActiveCensus() {
        if (!activeServiceId) return true;
        const service = availableServices.find(item => item.id === activeServiceId);
        if (!service) return false;
        const previous = censusStore.services[activeServiceId] || { sections: {} };
        const sections = {};
        document.querySelectorAll("#seccionesCenso .censo-seccion").forEach(card => {
            const section = sectionById.get(card.dataset.section);
            if (!section) return;
            const rows = Array.from(card.querySelectorAll("tbody tr[data-censo-row]"), row => ({
                id: String(row.dataset.rowId),
                data: rowValues(section, row)
            }));
            if (card.dataset.sectionPresent !== "true" && !rows.length) return;
            sections[section.id] = {
                present: true,
                rows
            };
        });
        const census = {
            ...previous,
            serviceId: service.id,
            serviceIndex: service.index,
            serviceNumber: service.serviceNumber,
            sections,
            summary: summarizeCensus({ sections })
        };
        const nextStore = {
            ...censusStore,
            services: { ...censusStore.services, [service.id]: census }
        };
        if (!window.AEEHState?.save() || !persistCensusStore(nextStore)) {
            document.getElementById("estadoCenso").textContent =
                "No se pudo guardar el Censo en el almacenamiento de esta sesión. Los cambios actuales solo permanecen en pantalla.";
            return false;
        }
        censusStore = nextStore;
        return true;
    }

    function assignPendingCensus(pendingId, serviceId) {
        const pendingIndex = censusStore.unassigned.findIndex(item => item.id === pendingId);
        const pendingItem = pendingIndex >= 0 ? censusStore.unassigned[pendingIndex] : null;
        const sourceCensus = pendingItem?.census || censusStore.services[pendingId];
        const service = availableServices.find(item => item.id === serviceId);
        if (!sourceCensus || !service) return false;
        const current = censusStore.services[serviceId];
        if (current && censusHasInformation(current) &&
            !window.confirm(`El ${service.label} ya tiene un Censo. ¿Desea reemplazarlo? El Censo existente quedará sin asignar.`)) {
            return false;
        }
        const next = {
            ...censusStore,
            services: { ...censusStore.services },
            unassigned: [...censusStore.unassigned]
        };
        if (current && censusHasInformation(current)) {
            next.unassigned.push({
                id: newStableId("censo-reemplazado"),
                label: `Censo anterior de ${service.label}`,
                census: current
            });
        }
        next.services[serviceId] = {
            ...sourceCensus,
            serviceId: service.id,
            serviceIndex: service.index,
            serviceNumber: service.serviceNumber,
            summary: summarizeCensus(sourceCensus)
        };
        if (pendingItem) next.unassigned.splice(pendingIndex, 1);
        else delete next.services[pendingId];
        if (!persistCensusStore(next)) {
            document.getElementById("estadoServicioCenso").textContent =
                "No fue posible guardar la asociación; el Censo permanece sin asignar.";
            return false;
        }
        censusStore = next;
        updateServiceSelector(service.id);
        document.getElementById("estadoServicioCenso").textContent = `Censo asociado explícitamente a ${service.label}.`;
        return true;
    }

    function persistEditedSection(section) {
        const card = document.getElementById(`seccionCenso_${section.id}`);
        if (card) updateSection(section, card);
        saveActiveCensus();
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

    function formatNumber(value) {
        return new Intl.NumberFormat("es-MX", { maximumFractionDigits: 2 }).format(value);
    }

    async function processFile() {
        const selector = document.getElementById("archivoExcel");
        const status = document.getElementById("estadoCenso");
        const detail = document.getElementById("detalleCenso");
        const button = document.getElementById("procesarArchivoBtn");
        const file = selector.files?.[0];
        if (!activeServiceId) {
            status.textContent = "Seleccione un servicio eléctrico antes de importar el Censo.";
            return;
        }
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
            if (!saveActiveCensus()) return;
            const currentService = availableServices.find(service => service.id === activeServiceId);
            const existingCensus = censusStore.services[activeServiceId];
            if (existingCensus && censusHasInformation(existingCensus) &&
                !window.confirm(`El Censo de ${currentService.label} ya contiene información. ¿Desea reemplazar únicamente este Censo?`)) {
                status.textContent = "Importación cancelada; se conservó el Censo existente.";
                return;
            }
            const importedSections = {};
            workbook.sections.forEach(({ section, rows }) => {
                importedSections[section.id] = { present: true, rows };
            });
            const importedCensus = {
                serviceId: currentService.id,
                serviceIndex: currentService.index,
                serviceNumber: currentService.serviceNumber,
                fileName: file.name,
                sheetNames: workbook.sheetNames,
                sections: importedSections
            };
            importedCensus.summary = summarizeCensus(importedCensus);
            const nextStore = {
                ...censusStore,
                services: { ...censusStore.services, [activeServiceId]: importedCensus }
            };
            if (!window.AEEHState?.save() || !persistCensusStore(nextStore)) {
                throw new Error("No fue posible guardar el Censo importado en el almacenamiento de esta sesión.");
            }
            censusStore = nextStore;
            document.getElementById("censoSchemaVersion").value = "1";
            document.getElementById("censoNombreArchivo").value = file.name;
            document.getElementById("censoHojasProcesadas").value = workbook.sheetNames.join(" | ");
            renderCensusForService();
            const extraMessage = workbook.extraSheets.length
                ? ` Se ignoraron hojas no contempladas: ${workbook.extraSheets.join(", ")}.`
                : "";
            status.textContent = `Formato válido: ${workbook.sheetNames.length} hojas leídas desde ${file.name}.`;
            const recordCount = workbook.sections.reduce((total, item) => total + item.rows.length, 0);
            const summary = summarizeCensus(importedCensus);
            detail.textContent = `${recordCount} filas con datos; ${summary.records} registro(s) completo(s) y ${summary.incomplete} incompleto(s). Las filas vacías y los valores ColumnaN se ignoraron; las fórmulas se recalculan en la plataforma.${extraMessage}`;
            const saved = window.AEEHState.save();
            if (!saved) {
                status.textContent = "El Censo quedó guardado, pero no se pudieron conservar algunos campos generales del módulo.";
            }
        } catch (error) {
            status.textContent = "No se pudo procesar el archivo.";
            detail.textContent = error.message;
        } finally {
            button.disabled = false;
        }
    }

    function restoreProcessedData() {
        updateServiceSelector();
    }

    function addSectionRow(sectionId) {
        const section = sectionById.get(sectionId);
        const card = document.getElementById(`seccionCenso_${sectionId}`);
        if (!section || !card) return;
        const rowIds = Array.from(card.querySelectorAll("tbody tr[data-censo-row]" )).map(row => row.dataset.rowId);
        const numericIds = rowIds.map(Number).filter(Number.isFinite);
        const nextId = String((numericIds.length ? Math.max(...numericIds) : section.dataStart - 1) + 1);
        const row = createRow(section, nextId);
        card.querySelector("tbody").appendChild(row);
        card.dataset.sectionPresent = "true";
        updateSection(section, card);
        saveActiveCensus();
    }

    function removeSectionRow(sectionId, rowElement) {
        const section = sectionById.get(sectionId);
        const card = document.getElementById(`seccionCenso_${sectionId}`);
        if (!section || !card) return;
        rowElement.remove();
        updateSection(section, card);
        saveActiveCensus();
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
        const saved = saveActiveCensus() && Boolean(window.AEEHState?.save());
        const status = document.getElementById("estadoCenso");
        if (saved && activeServiceId) {
            status.textContent = "Censo del servicio guardado temporalmente en esta sesión.";
        } else if (!saved) {
            status.textContent = "No fue posible guardar los cambios en el estado local de la sesión.";
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

    function initialize() {
        const pageNumber = document.getElementById("numeroPagina");
        if (pageNumber) pageNumber.textContent = "Página 8 de 9";
        const name = sessionStorage.getItem("nombre");
        if (name) {
            const usuario = document.getElementById("nombreUsuario");
            if (usuario) usuario.textContent = `👤 ${name}`;
        }

        loadCensusStore();
        availableServices = getServiceDirectory();
        migrateLegacyCensus();
        const serviceSelector = document.getElementById("servicioCensoSeleccionado");
        serviceSelector.addEventListener("change", () => {
            if (suppressServiceChange) return;
            const nextServiceId = serviceSelector.value;
            if (activeServiceId && !saveActiveCensus()) {
                suppressServiceChange = true;
                serviceSelector.value = activeServiceId;
                suppressServiceChange = false;
                return;
            }
            activeServiceId = nextServiceId;
            if (window.AEEHState && !window.AEEHState.save()) {
                document.getElementById("estadoServicioCenso").textContent =
                    "No se pudo guardar la selección del servicio en el estado del módulo.";
            }
            renderCensusForService();
            renderPendingAssignments();
            if (activeServiceId) {
                const service = availableServices.find(item => item.id === activeServiceId);
                document.getElementById("estadoServicioCenso").textContent =
                    service ? `Capturando información de ${service.label}.` : "";
            } else if (availableServices.length) {
                document.getElementById("estadoServicioCenso").textContent =
                    "Seleccione un servicio eléctrico; no se asignarán censos automáticamente.";
            }
        });

        document.getElementById("censosPendientesAsignacion").addEventListener("click", event => {
            const button = event.target.closest("button[data-assign-census]");
            if (!button) return;
            const pendingId = button.dataset.assignCensus;
            const select = document.querySelector(`select[data-pending-census="${CSS.escape(pendingId)}"]`);
            if (!select?.value) {
                document.getElementById("estadoServicioCenso").textContent =
                    "Seleccione el servicio destino antes de asociar el Censo.";
                return;
            }
            assignPendingCensus(pendingId, select.value);
        });

        const fileSelector = document.getElementById("archivoExcel");
        if (fileSelector) {
            fileSelector.addEventListener("change", () => {
                const file = fileSelector.files?.[0];
                if (file) {
                    const estado = document.getElementById("estadoCenso");
                    if (estado) estado.textContent = `Archivo seleccionado: ${file.name}. Presione Procesar Archivo para validarlo.`;
                    window.AEEHState?.save();
                }
            });
        }

        const sections = document.getElementById("seccionesCenso");
        if (sections) {
            sections.addEventListener("input", event => {
                const row = event.target.closest("tr[data-censo-row]");
                if (!row) return;
                const section = sectionById.get(row.closest("section[data-section]")?.dataset.section);
                if (!section) return;
                recalculateRow(section, row);
                updateSection(section, row.closest("section[data-section]"));
                saveActiveCensus();
            });
            sections.addEventListener("change", event => {
                const reviewControl = event.target.closest("input[data-category-review='true']");
                if (reviewControl) {
                    const sectionId = reviewControl.dataset.section;
                    const census = censusStore.services[activeServiceId];
                    if (!census || !sectionById.has(sectionId)) return;
                    census.categoryReview = {
                        ...(census.categoryReview || {}),
                        [sectionId]: {
                            reviewed: true,
                            equipmentPresent: reviewControl.value === "true"
                        }
                    };
                    const section = sectionById.get(sectionId);
                    const card = reviewControl.closest(".censo-seccion");
                    if (section && card) updateCategoryReviewStatus(section, card);
                    saveActiveCensus();
                    return;
                }
                const row = event.target.closest("tr[data-censo-row]");
                if (!row) return;
                const section = sectionById.get(row.closest("section[data-section]")?.dataset.section);
                if (section) persistEditedSection(section);
            });
            sections.addEventListener("click", event => {
                const button = event.target.closest("button[data-action]");
                if (!button) return;
                if (button.dataset.action === "add-row") addSectionRow(button.dataset.section);
                if (button.dataset.action === "remove-row") removeSectionRow(button.dataset.section, button.closest("tr[data-censo-row]"));
            });
        }

        restoreProcessedData();
    }

    window.descargarFormato = downloadTemplate;
    window.procesarArchivo = processFile;
    window.regresar = back;
    window.guardar = save;
    window.continuar = continueToBaseline;
    window.cerrarSesion = logout;
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
})();
