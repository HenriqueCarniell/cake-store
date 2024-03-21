// controllers/sendDataProduct.js
const db = require('../db/db');

exports.AlterDataProduct = (req, res) => {
    const { NewNameProduct, NewPriceProduct, NewDescProduct } = req.body;
    const { idProduto } = req.params;

    const sql = "UPDATE Produto SET NomeProduto = ?, precoProduto = ?, DescricaoProduto = ? WHERE idProduto = ?";

    db.query(sql, [NewNameProduct, NewPriceProduct, NewDescProduct, idProduto], (err, result) => {
        if (err) {
            console.error(err);
            res.json({ error: "Erro ao alterar dados do produto" });
        } else {
            console.log(result);
            res.json({ msg: "Dados alterados com sucesso" });
        }
    });
};