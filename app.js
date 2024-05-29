const express=require("express")
require("dotenv").config()
const app=express()
const userRoute = require('./routes/UserRoutes')
const profileRoute = require('./routes/ProfileRoutes')
const followerRoute = require('./routes/FollowerRoutes')

app.use(express.json())
app.use('/user', userRoute)
app.use('/profile', profileRoute)
app.use('/follower', followerRoute)


const port=process.env.APP_PORT || 8000
app.listen(port,()=>{
 console.log(`Server is running on PORT ${port}....`)
})