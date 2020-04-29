const neatCsv = require('neat-csv');
const fs = require('fs')

const DEPARTAMENTOS_MAP = {
  'AMAZONAS': 'AM',
  'ANCASH': 'AN',
  'APURIMAC': 'AP',
  'AREQUIPA': 'AR',
  'AYACUCHO': 'AY',
  'CAJAMARCA': 'CA',
  'CUSCO': 'CU',
  'HUANUCO': 'HU',
  'HUANCAVELICA': 'HV',
  'ICA': 'IC',
  'JUNIN': 'JU',
  'LAMBAYEQUE': 'LA',
  'LA LIBERTAD': 'LL',
  'LIMA': 'LI',
  'LORETO': 'LO',
  'MADRE DE DIOS': 'MD',
  'MOQUEGUA': 'MO',
  'PASCO': 'PA',
  'PIURA': 'PI',
  'PUNO': 'PU',
  'SAN MARTIN': 'SM',
  'TACNA': 'TA',
  'TUMBES': 'TU',
  'UCAYALI': 'UC'
}

fs.readFile('./data/source.csv', async (err, data) => {
  if (err) {
    console.error(err)
    console.log("./data/source.csv file not found.")
    return
  }

  const csvSource = await neatCsv(data)
  const outputJson = csvSource.map(entry => ({
    ...entry,
    state: DEPARTAMENTOS_MAP[entry.state],
    ML: parseFloat(entry.ML),
    Low_90: parseFloat(entry.Low_90),
    High_90: parseFloat(entry.High_90)
  })).map(entry => ([
    entry.state,
    entry.date,
    entry.ML,
    entry.Low_90,
    entry.High_90
  ]))

  fs.writeFileSync('./src/data/output.js', `export default ${JSON.stringify({
    "columns": [
      "state",
      "date",
      "ML",
      "Low_90",
      "High_90"
    ],
    "data": outputJson
  })}`)

  console.log("Done generating json source.")
})
