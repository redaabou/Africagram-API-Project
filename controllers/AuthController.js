
const asyncHandler = require('express-async-handler')
const {PrismaClient} = require("@prisma/client")
const {  token } = require('../utils/jwt')
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken');
const {hashPassword} = require("../utils/hashPassword")
const {comparePass} = require("../utils/comparePasswords")

exports.SingUp = asyncHandler(async(req,res,)=>{
    req.body.password = hashPassword(req.body.password)
    const user = await prisma.utilisateur.create({
       data:req.body
})
const tokenS = token(user.id)
res.status(200).json({
    data : user,
    token : tokenS
})
})

exports.Login = asyncHandler(async(req,res)=>{
    const getOneUser = await prisma.utilisateur.findUnique({
        where: {
            email: req.body.email
        }
    })
    if(!getOneUser){
     res.status(401).json({message:"Invalid email or password"})
    }
    const isPassword = await comparePass(req.body.password , getOneUser.password)
    if(!isPassword){
        res.status(401).json({message:"Invalid email or password"})
    }
    const tokenL = token(getOneUser.id)
    res.status(200).json({
        data :getOneUser,
        token : tokenL
    })
})

exports.protect = asyncHandler(async(req,res,next)=>{
    console.log(req.headers)
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bear")){
    token = req.headers.authorization.split(" ")[1]
    }
    if(!token){
        return res.status(401).json({message:"Not authorized to access this route"})
    }
    const decoded =  jwt.verify(token , process.env.jwt_web_key)
    console.log(decoded)
    const currentUser = await prisma.utilisateur.findUnique({
        where:{
            id:decoded.userId
        }
    })
    if(!currentUser){
        return res.status(401).json({message:"User not found"})
    }
    console.log(currentUser)
    req.user = currentUser
    next()
})

exports.allowedTo = (admin) =>asyncHandler(async(req,res,next)=>{
    if(admin != req.user.isAdmin){
        return res.status(403).json({message:"You are not allowed to access this route"})
    }
     next()  
    })
    