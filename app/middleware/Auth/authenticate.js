const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
    
    const Authorization = req.headers['authorization'];
    const token = Authorization && Authorization.split(" ")[1];
    if(token == null){
        return res.sendStatus(401);
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET ,(err,user)=>{
        if(err){
           return res.sendStatus(403);
        }
        req.user = user;
        next();
    });

};

module.exports = authenticate;