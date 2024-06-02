const Joi = require("joi")
const asyncHandler = require('express-async-handler')



exports.LikeValidator = asyncHandler(async(req,res,next)=>{
    
    const LikeSchema = Joi.object({
        post_id : Joi.number().required()
          
    })
    const validation = LikeSchema.validate(req.params, { abortEarly: false });

    if (validation.error) {
      validation.error.details.forEach(err => {
        return next(new Error('post_id" must be a number'));
      });
    } else {
      console.log('Validation successful');
    }
    
    next() 
    
})


