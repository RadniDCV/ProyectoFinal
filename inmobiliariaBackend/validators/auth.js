const jwt = require("jsonwebtoken")

exports.verifyToken = (req, res, next) => {
    const token = req.header("Authorization")
    if(!token){
        res.status(401).json({error: "Acceso a recurso denegado"})
    }
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified
        next()
    }catch(error){
        res.status(400).json({error: "el token es invalido"})
    }
}