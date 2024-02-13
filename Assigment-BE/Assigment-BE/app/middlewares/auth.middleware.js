const jwt = require("jsonwebtoken");
const _ = require("lodash");
const userService = require("../services/user.service")
const { chain } = _;  
const user = async (req, res, next) => {

    const token = _.chain(req).get("headers.authorization", "").replace("Bearer ", "").value();
    if (token) {
      // Validate token
      try {
        const tokenData = jwt.verify(token, process.env.jwtSecretKey);
        console.log('tokenData :>> ', tokenData);
        if(tokenData.id && tokenData.email){
          const userData = await userService.validateUser(tokenData.id,tokenData.email)
          req.tokenUser = userData;
          next();
        }else{
          res.status(401).send({ status: 401, message: 'Invalid Token' });
        }
      } catch (error) {
  
        if (error.name === 'TokenExpiredError') {
          res.status(401).send({ status: 401, message: 'Token expired' });
        } else {
          res.status(401).send({ status: 401, message: 'Token expired' });
        }
      }
  
    } else {
      res.status(401).send('No token provided');
    }
  }
  
  module.exports = {
   user
  };