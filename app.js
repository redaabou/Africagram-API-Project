const express=require("express")
require("dotenv").config()
const app=express()
const AuthRoute = require("./routes/AuthRoutes")
const PostRoute = require("./routes/PostRoutes")
app.use(express.json())


app.use("/auth" , AuthRoute)
app.use("/posts" , PostRoute)


const port=process.env.APP_PORT || 8000
app.listen(port,()=>{
 console.log(`Server is running on PORT ${port}....`)
})