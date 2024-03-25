const db = require('../db/db')

exports.addCart = (req,res) => {
    const {idProduct} = req.params;

    const sql = "insert into "
}