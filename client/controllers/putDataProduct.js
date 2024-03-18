const db = require('../db/db')

exports.alterData = (req,res) => {
    const {id} = req.params
    console.log(id)

    const sql = "delete from Produto where idProduto = ?"
}