const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());  //{ origin: 'https://meusite.com.br' } Quando estiver em produção
app.use(express.json());
app.use(routes);


app.listen(3333);