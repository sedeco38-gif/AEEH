const path = require('path');
const ExcelJS = require('exceljs');

const tempPath = path.join(__dirname, 'Formato', 'Censo de Carga - prueba.xlsx');
const workbook = new ExcelJS.Workbook();

function createSheet(name, headers, rows, ref) {
  const sheet = workbook.addWorksheet(name);
  sheet.addTable({
    name: name.replace(/[^a-zA-Z0-9_]/g, '_').slice(0, 31),
    ref,
    headerRow: true,
    columns: headers.map(header => ({ name: header })),
    rows
  });
  return sheet;
}

function setFormulaRow(sheet, rowNumber, formulas) {
  Object.entries(formulas).forEach(([cell, formula]) => {
    sheet.getCell(`${cell}${rowNumber}`).value = { formula, result: null };
  });
}

const iluminacionRows = [
  ['Edificio A', 'Nivel 1', 'Dirección Administrativa', 'Pasillo central', 'Foco LED tipo panel', 10, 1, 10, 20, 200, 8, 2, 10, 120, 104, 'Prueba controlada']
];

const computoRows = [
  ['Edificio A', 'Nivel 1', 'Dirección Administrativa', 'Área de cómputo', 'PC de trabajo', 2, 1, 120, 240, 8, 2, 10, 74.88]
];

const fuerzaRows = [
  ['Edificio A', 'Nivel 1', 'Dirección Administrativa', 'Planta baja', 'Bomba de agua', 1, 2, 1100, 1100, 220, 6, 1, 7, 400.4, 2024, 'Prueba controlada']
];

const aireRows = [
  ['Edificio A', 'Nivel 1', 'Dirección Administrativa', 'Oficina', 'Aire acondicionado split', 1, 12000, 220, 8, 950, 950, 8, 2, 10, 2023, 494]
];

const electroRows = [
  ['Edificio A', 'Nivel 2', 'Dirección Administrativa', 'Cocina', 'Refrigerador', 1, 250, 250, 8, 2, 10, 130]
];

const vozRows = [
  ['Edificio A', 'Nivel 1', 'Dirección Administrativa', 'Sala de servidores', 'Switch de red', 1, 30, 30, 24, 0, 24, 37.44]
];

const personaleRows = [
  ['Edificio A', 'Nivel 1', 'Dirección Administrativa', 'Sala de trabajo', 'Laptop', 3, 90, 270, 10, 2, 12, 168.48]
];

const otrosRows = [
  ['Edificio A', 'Nivel 1', 'Dirección Administrativa', 'Área general', 'Equipo auxiliar', 1, 120, 120, 10, 2, 12, 74.88]
];

const iluminacion = createSheet('ILUMINACIÓN', [
  'Edificio', 'Nivel', 'Secretaría/Dependencia', 'Área Específica', 'Descripción de la luminaria', 'Cantidad de Luminarios', 'Lámpara por Luminario', 'Total de lámparas', 'Potencia (W) por lámpara', 'Total de consumo (W)', 'Horas de operación (Lun-Vie)', 'Horas de Operación (Sáb-Dom)', 'Horas de operación Totales a la Semana', 'Área en m2 del espacio', 'Consumo (KWh/año)', 'Observaciones'
], iluminacionRows, 'A8:P9');
setFormulaRow(iluminacion, 9, { H: 'F9*G9', J: 'H9*I9', M: 'K9+L9', O: 'J9*M9*52/1000' });

const computo = createSheet('CÓMPUTO', [
  'Edificio', 'Nivel', 'Secretaría/Dependencia', 'Área especÍfica', 'Descripción del equipo', 'Cantidad', 'Consumo en espera', 'Potencia (W)', 'Total de consumo (W)', 'Horas de operación (Lun-Vie)', 'Horas de Operación (Sáb-Dom)', 'Horas de operación Totales a la Semana', 'Consumo en KWh/año'
], computoRows, 'A7:M8');
setFormulaRow(computo, 8, { I: 'F8*H8', L: '-J8+K8', M: 'I8*L8*52/1000' });

const fuerza = createSheet('FUERZA', [
  'Edificio', 'Nivel', 'Secretaría/Dependecia', 'Área específica', 'Descripción del equipo', 'Cantidad', 'Capacidad [Hp]', 'Potencia (W)', 'Total de consumo (W)', 'Volts (V)', 'Horas de operación (Lun-Vie)', 'Horas de Operación (Sáb-Dom)', 'Horas de operación Totales a la Semana', 'Consumo en KWh/año', 'Año en que se instalo', 'Observaciones'
], fuerzaRows, 'A9:P10');
setFormulaRow(fuerza, 10, { I: 'H10*F10', M: 'K10+L10', N: 'I10*M10*52/1000' });

const aire = createSheet('AIRE AC.', [
  'Edificio', 'Nivel', 'Secretaría/Dependencia', 'Área específica', 'Descripción del equipo de ventilación', 'Cantidad', 'BTU/HR', 'Volts', 'Amperes', 'Potencia (W)', 'Total de consumo (W)', 'Horas de operación (Lun-Vie)', 'Horas de Operación (Sáb-Dom)', 'Horas de operación Totales a la Semana', 'Año en que se instalo', 'Consumo total kWh/año'
], aireRows, 'A8:P9');
setFormulaRow(aire, 9, { K: 'F9*J9', N: 'L9+M9', P: 'K9*N9*52/1000' });

const electro = createSheet('ELECTRODOMESTICOS', [
  'Edificio', 'Nivel', 'Secretaría/Dependencia', 'Área específica', 'Descripción del equipo', 'Cantidad', 'Potencia (W)', 'Total de consumo (W)', 'Horas de operación (Lun-Vie)', 'Horas de Operación (Sáb-Dom)', 'Horas de operación Totales a la Semana', 'Consumo en KWh/año'
], electroRows, 'A8:L9');
setFormulaRow(electro, 9, { H: 'F9*G9', K: 'I9+J9', L: 'H9*K9*52/1000' });

const voz = createSheet('VOZ-DATOS Y VIDEOVIGILANCIA', [
  'Edificio', 'Nivel', 'Secretaría/Dependencia', 'Área Específica', 'Descripción del equipo electrico', 'Cantidad', 'Potencia (W)', 'Total de consumo (W)', 'Horas de operación (Lun-Vie)', 'Horas de Operación (Sáb-Dom)', 'Horas de operación Totales a la Semana', 'Consumo en KWh/año'
], vozRows, 'A8:L9');
setFormulaRow(voz, 9, { H: 'F9*G9', K: 'I9+J9', L: 'H9*K9*52/1000' });

const personales = createSheet('EQUIPOS PERSONALES', [
  'Edificio', 'Nivel', 'Secretaría/Dependencia', 'Área Específica', 'Descripción del equipo eléctrico', 'Cantidad', 'Potencia (W)', 'Total de consumo (W)', 'Horas de operación (Lun-Vie)', 'Horas de Operación (Sáb-Dom)', 'Horas de operación Totales a la Semana', 'Consumo en KWh/año'
], personaleRows, 'A8:L9');
setFormulaRow(personales, 9, { H: 'F9*G9', K: 'I9+J9', L: 'H9*K9*52/1000' });

const otros = createSheet('OTROS', [
  'Edificio', 'Nivel', 'Secretaría/Dependencia', 'Area Especifica', 'Descripción del equipo electrico', 'Cantidad', 'Potencia (W)', 'Total de consumo (W)', 'Horas de operación (Lun-Vie)', 'Horas de Operación (Sáb-Dom)', 'Horas de operación Totales a la Semana', 'Consumo en KWh/año'
], otrosRows, 'A8:L9');
setFormulaRow(otros, 9, { H: 'F9*G9', K: 'I9+J9', L: 'H9*K9*52/1000' });

workbook.xlsx.writeFile(tempPath)
  .then(() => {
    console.log(`Archivo de prueba generado en: ${tempPath}`);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
