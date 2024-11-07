// index.js
const express = require('express');
const sql = require('mssql');
const { sqlConfig } = require('./config');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/usuarios', async (req, res) => {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM usuarios`;
    res.json(result.recordset);
  } catch (err) {
    console.error('Error en la consulta:', err);
    res.status(500).send('Error en la base de datos');
  } finally {
    await sql.close();
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
