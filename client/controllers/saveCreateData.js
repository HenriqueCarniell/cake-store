exports.Create = (req,res) => {
    const {NameCreate,EmailCreate,PasswordCreate} = req.body

    LoginNullData(NameCreate,EmailCreate,PasswordCreate,res)
}

let LoginNullData = (Name, Email, Password, res) => {
    if(!Name) {
        return res.json({msg: "Digite um Nome"});
    }
    if(!Email) {
        return res.json({msg: "Digite um Email"});
    }
    if(!Password) {
        return res.json({msg: "Digite uma Senha"});
    }
}