const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token){
      return res.status(401).json({
        auth: false,
        message: 'No token provided, Denied access'
      })
    }

    try{
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET || 'This is a secret' ); 
      req.userId = decoded.id 
      next();
    }catch(error){
      res,status(400).json({message: 'Invalid token'})
    }
}

module.exports = verifyToken;