const jwt = require('jsonwebtoken');

exports.token = payload => jwt.sign({userId : payload},process.env.jwt_web_key,{ expiresIn:"1h"})