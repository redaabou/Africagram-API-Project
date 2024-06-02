const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient
const asyncHandler = require('express-async-handler');
const { date } = require('joi');

// add comment
exports.addComment = asyncHandler(async (req, res) => {
    const comment = await prisma.commentaire.create({
        data:{
            ...req.body,
            post_id:parseInt(req.params.post_id),
            utilisateur_id:parseInt(req.user.id)
        }
    })
    res.status(200).json({data:comment})
})

// get all comments
exports.getAllComments = asyncHandler(async (req, res)=> {
    const allComment = await prisma.commentaire.findMany()
    res.status(200).json(allComment)
})

// modify comment
exports.updateComment = asyncHandler(async (req, res)=>{
    const comment = await prisma.commentaire.update({
        where:{
            id:parseInt(req.params.id)
        },
        data:req.body
    })
    res.status(200).json({message:"comment updated successfuly",comment})
})

// delete comment
exports.deleteComment = asyncHandler(async (req, res)=>{
    const comment = await prisma.commentaire.delete({
        where:{
            id:parseInt(req.params.id)
        }
    })
    res.status(200).json({message:`comment with id ${comment.id} has been deleted successfuly`})
})