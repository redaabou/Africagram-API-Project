const express=require("express")
require("dotenv").config()
const app=express()
const AuthRoute = require("./routes/AuthRoutes")
const PostRoute = require("./routes/PostRoutes")
const LikeRoute = require("./routes/LikesRoutes")
app.use(express.json())


app.use("/auth" , AuthRoute)
app.use("/posts" , PostRoute)
app.use("/like" , LikeRoute)

app.use((err,req,res,next)=>{
    
    res.status(400).json({
        
        message:err.message,
        stack : err.stack
    })
})



const port=process.env.APP_PORT || 8000
app.listen(port,()=>{
 console.log(`Server is running on PORT ${port}....`)
})