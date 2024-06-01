const NotFond = require("./not-found")
const  Unauthenticated = require("./unauthenticated")
const BadRequest = require("./bad-request")
 
exports.NotFond = (url) => NotFond(url)
exports.Unauthenticated = (message) => Unauthenticated(message)
exports.BadRequest = (message , statusCode) => BadRequest(message,statusCode)


