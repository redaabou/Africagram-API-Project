const ApiError = require("./ApiError")
const NotFond = (url) => new ApiError(`this url ${url} no exist`,404)
module.exports = NotFond