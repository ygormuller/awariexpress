const express = require('express');
const cpf = require('cpf');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const cpfNumber = cpf.generate();
  res.send(`Gerado CPF: ${cpfNumber}`);
});

app.listen(port, () => {
  console.log(`CPF generator listening at http://localhost:${port}`);
});