const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const path = require('path')
const app = express()
const porta = 4000

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);
app.use("/files", express.static(path.resolve(__dirname, "uploads")))

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})