const express = require('express')
const cors = require('cors')
const routes = require('../client/routes/routes')
const app = express()
const porta = 4000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})