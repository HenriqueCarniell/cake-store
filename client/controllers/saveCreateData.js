const bcrypt = require('bcrypt');
const db = require('../db/db');

exports.Create = async (req, res) => {
    const { NameCreate, EmailCreate, PasswordCreate } = req.body

    if (ValidationLoginNullData(NameCreate, EmailCreate, PasswordCreate, res)) {
        return;
    }

    let EmailExistBD = await ValidationEmailDatabase(EmailCreate);

    if (EmailExistBD == true) {
        return res.json({ msg: "Este email já foi usado por favor use outro ou logue" });
    } else {
        await InsertLoginDatabase(NameCreate,EmailCreate,PasswordCreate,res);
        return res.json({ msg: "Conta criada com sucesso!" });
    }
}

let ValidationLoginNullData = (Name, Email, Password, res) => {
    if (!Name) {
        return res.json({ msg: "Digite um Nome" });
    }
    if (!Email) {
        return res.json({ msg: "Digite um Email" });
    }
    if (!Password) {
        return res.json({ msg: "Digite uma Senha" });
    }
}


let ValidationEmailDatabase = async (Email) => {
    return new Promise((resolve, reject) => {
        const sql = "select * from Usuario where email = ? ";

        db.query(sql, [Email], (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            }

            if (result.length > 0) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    })
}

let InsertLoginDatabase = async(Name,Email,Password,res) => {

    const salt = await bcrypt.genSalt(12);
    const PasswordCrypt = await bcrypt.hash(Password,salt)

    const sql = "insert into Usuario(Nome,email,senha) values(?,?,?)";

    db.query(sql,[Name,Email,PasswordCrypt], (err,result) => {
        if(err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}
