const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const asyncHandler = require('express-async-handler')
const Err = require("../errors/index")

exports.likePost = asyncHandler(async(req,res,next)=>{
    
    const userLike = await prisma.aime.findMany({
        where:{ 
            AND:[
                {post_id:parseInt(req.params.post_id)},
                {utilisateur_id:req.user.id}
            ]
        }
    })
    let like
    userLike.map(item =>like= item)  
       if(like){
        return   next(Err.BadRequest("this poste already liked",400));
       }
    const post_id = parseInt(req.params.post_id)
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