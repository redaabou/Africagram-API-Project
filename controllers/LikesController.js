const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const asyncHandler = require('express-async-handler')

exports.likePost = asyncHandler(async(req,res)=>{
    console.log("hello")
    const post_id = parseInt(req.params.postId)
    await prisma.$transaction(async(prisma)=>{
           
            const utilisateur_id = parseInt(req.user.id)
             await prisma.aime.create({
                data:{
                    post_id,
                    utilisateur_id
                }
            })
       
            
       await prisma.post.update({
                where:{
                    id : post_id
                },
                data :{
                    total_likes :{
                        increment:1
                    }
                }
            })
        
    })
    res.status(200).json({
       message : 'Post liked successfully!'  
      })
} 
)