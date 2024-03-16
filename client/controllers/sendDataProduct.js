const db = require('../db/db');

exports.sendDataProduct = (req,res) => {
    const {NameProduct, PriceProduct,DescProduct} = req.body;

    const sql = "insert into Produto(Nome, preco, Descricao) values(?,?,?)";

    db.query(sql,[NameProduct,PriceProduct, DescProduct], (err,result) => {
        if(err) {
            console.log(err);
        }

        if(result) {
            res.json({msg: "Itens adicionados com sucesso"});
        } else {
            res.json({msg: "Erro ao adicionar Itens"});
        }
    })
}