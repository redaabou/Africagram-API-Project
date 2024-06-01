const ApiError = require("./ApiError")
const BadRequest = (message,statusCode) => new ApiError(message,statusCode)
module.exports = BadRequest