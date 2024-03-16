const db = require('../db/db')

exports.getDataProduct = (req, res) => {

    const sql = "select * from Produto";

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            let newData = result.map((itens) => {
                var bufferBase64 = itens.fotoProduto.toString('base64');
                return {...itens, fotoProduto: bufferBase64}
            })
            res.send(newData);
        }
    })
}
