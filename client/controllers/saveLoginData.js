exports.Login = (req, res) => {
    const { EmailLogin, PasswordLogin } = req.body;

    LoginNullData(EmailLogin, PasswordLogin,res);
}

let LoginNullData = (Email, Password,res) => {
    if(!Email) {
        return res.json({msg: "Digite um Email"});
    }
    if(!Password) {
        return res.json({msg: "Digite uma Senha"});
    }
}