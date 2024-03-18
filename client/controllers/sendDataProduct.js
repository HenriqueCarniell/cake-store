// controllers/sendDataProduct.js
const db = require('../db/db');
const upload = require('../multer/multerConfig');

exports.SendDataProduct = (req, res) => {
    const { NameProduct, PriceProduct, DescProduct } = req.body;
    let PhotoProduct = req.file ? req.file.filename : null;

    console.log(NameProduct,PriceProduct,DescProduct,PhotoProduct)

    const sql = "INSERT INTO Produto (NomeProduto, precoProduto, DescricaoProduto, fotoProduto) VALUES (?, ?, ?, ?)";

    db.query(sql, [NameProduct, PriceProduct, DescProduct, PhotoProduct], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result) {
            res.json({ msg: "Itens adicionados com sucesso" });
        } else {
            res.json({ msg: "Erro ao adicionar Itens" });
        }
    });
};
