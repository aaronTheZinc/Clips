require("dotenv").config();
const jwt = require("jsonwebtoken");

class Token {
  constructor() {}

  getData = (token) =>
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => user);

  createToken = (user) => jwt.sign(user, process.env.TOKEN_SECRET);
  validate = (token, res, next) => {
    const isValid = jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        res.json({
          error: err,
        });
      } else {
        return true;
      }
    });
    return isValid;
  };

  authenticate_token = (token) => jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => !err ? user: err)
}
module.exports = new Token();
