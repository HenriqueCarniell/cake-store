const jwt = require('jsonwebtoken')
const auth = require('../auth/auth')

exports.VerifyToken = (req,res,next) => {
    const authHeader  = req.headers.authorization;

    if(!authHeader ) {
        return res.json({msg: "Token Invalido"})
    }

    let [,token] = authHeader.split(" ")

    jwt.sign(token, auth.jwt.secret, (err,decoded) => {
        if(err) {
            console.log(err)
        }
        
        req.userId = decoded.sub;
        next()
    })
}