const db = require('../db/db');

exports.getDataProduct = (req,res) => {

    const sql = "select * from Produto";

    db.query(sql, (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result)
        }
    })
}