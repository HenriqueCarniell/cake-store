const db = require('../db/db');
const jw = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const auth = require('../auth/auth')

exports.Login = async (req, res) => {
    const { EmailLogin, PasswordLogin } = req.body;

    if (VerifyNullData(EmailLogin, PasswordLogin, res)) {
        return;
    }

    let user = await ValidationLoginData(EmailLogin);

    if (user) {
        let comparePassword = await bcrypt.compare(PasswordLogin, user.senha);

        if (comparePassword) {

            const token = jw.sign({}, auth.jwt.secret, {
                subject: String(user.idUsuario),
                expiresIn: auth.jwt.expiresIn
            });

            // Id do usuario será Global
            req.userId = user.idUsuario;

            return res.json({ sucess: "Usuário Logado", token});
        } else {
            return res.json({ msg: "Email ou Senha incorretos" });
        }
    } else {
        return res.json({ msg: "Usuário não Existe" });
    }
}

let VerifyNullData = (Email, Password, res) => {
    if (!Email) {
        res.json({ msg: "Digite um email" });
        return true;
    }
    if (!Password) {
        res.json({ msg: "Digite uma senha" });
        return true;
    }
    return false;
}

let ValidationLoginData = (emaillogin) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Usuario WHERE email = ?";

        db.query(sql, [emaillogin], (err, result) => {
            if (err) {
                reject(err);
                console.log(err);
            }
            if (result.length > 0) {
                resolve(result[0]);
            } else {
                resolve(false);
            }
        })
    })
}
