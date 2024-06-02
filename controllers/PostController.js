const {PrismaClient} = require("@prisma/client")
const asyncHandler = require('express-async-handler')
const prisma = new PrismaClient()
const multer  = require('multer')
const sharp = require("sharp")
const { v4 :uuidv4 } = require("uuid")


const multerFilter = (req,file,cb)=>{
   
    if(file.mimetype.startsWith("image")){
        cb(null , true)
    }else{
        cb(new Error("file must be image" , 400) , false)
    }
}
const multerStorage = multer.memoryStorage()

const upload = multer({storage:multerStorage , fileFilter:multerFilter})
 exports.uploadImage = upload.single("image_url")

 exports.resizeImagePost = async(req ,res,next)=>{
        const fileName = `post-${uuidv4()}-${Date.now()}.jpeg`
        if(req.file){
        await sharp(req.file.buffer).resize(600,600).toFormat("jpeg").
        jpeg({quality:90}).toFile(`uploads/posts/${fileName}`)
        req.body.image_url = fileName
        }
        next()
}

exports.addPostController = asyncHandler(async(req,res)=>{
    
    const newPost = await prisma.post.create({
        data:{
            ...req.body,
            utilisateur_id:req.user.id
        }
    })
    res.status(200).json({
        data : newPost
    })
})

exports.getAllPosts = asyncHandler(async(req,res)=>{
    const page = req.query.page*1 || 1
    const take = req.query.take*1 || 5
    const skip = (page-1)*take
    const endIndex = page*take
    const countDocuments = await prisma.post.count()
    //console.log(countDocuments)
     const paginate = {}
     paginate.take = take
     paginate.page = page
     paginate.numberOfPages =Math.ceil(countDocuments/take)
    //next page
    if(endIndex<countDocuments){
        paginate.next = page+1
     }
     //previous page
     if(skip >0){
         paginate.pre = page-1
     }
    const posts = await prisma.post.findMany({
        include:{commentaire:true},
        skip,
        take
    })
    res.status(200).json({
        paginate,
        data : posts
        })
})

