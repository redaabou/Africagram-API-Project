const {PrismaClient} = require("@prisma/client")
const asyncHandler = require('express-async-handler')
const prisma = new PrismaClient()
const Err = require("../errors/index")

exports.PostMiddel = asyncHandler(async(req,res,next)=>{
    console.log(req.params.post_id)
    const post = await prisma.post.findUnique({
        where:{
            id :parseInt(req.params.post_id)
        }
    })
    console.log(post)
    if(!post){
     return next(Err.BadRequest("this post not exist",400))
    }
    next()
})