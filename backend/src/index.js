const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app =  express();

app.use(cors());//aqui está o segredo de ospedar o meu site dklafdçafak
app.use(express.json());
app.use(routes);

app.listen(3333);