const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const app = express()
const porta = 4000

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})