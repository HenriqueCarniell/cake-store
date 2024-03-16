const db = require('../db/db')

exports.getDataProduct = (req,res) => {

    const sql = "select * from Produto";

    db.query(sql, (err,result) => {
        if(err) {
            console.log(err);
        } else {
            // Convertendo a foto do produto para base64
            const products = result.map(product => {
                const photo = Buffer.from(product.fotoProduto).toString('base64');
                return {...product, fotoProduto: photo};
            });
            res.json(products);
        }
    })
}
