const ApiError = require("./ApiError")
const Unauthenticated = (message) => new ApiError(message,401)
module.exports = Unauthenticated