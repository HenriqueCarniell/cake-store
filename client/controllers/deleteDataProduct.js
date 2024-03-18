const db = require('../db/db')

exports.deleteData = (req,res) => {
    const {id} = req.params;

    const sql = "delete from Produto where idProduto = ?"

    db.query(sql, [id], (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.json({msg: "Iten excluido com sucesso"})
            console.log(result)
        }
    })
}