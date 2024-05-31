const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient
const asyncHandler = require('express-async-handler')

const globalFct = (par)=> prisma.utilisateur.aggregate({
    where: {
        profile:{
            pays:par,
              
        }
    },
    _count:true
});

exports.allStatistics = asyncHandler(async (req, res) => {
    // total of all the users
    const users = await prisma.utilisateur.count();

    // total of users for each country
    const usersByCountry = await globalFct(req.query.pays) 

    // totale users by gender
    const genderDistribution = await prisma.utilisateur.aggregate({
       where:{
        profile:{
            sexe:req.query.sexe
        }
       },
       _count:true
      });

    // Average number of posts per user
    // total number of posts
    const totalPosts = await prisma.post.count({
        where:{
            utilisateur_id:parseInt(req.query.userId)
        }
    });

    const avgPostsPerUser = totalPosts / users;
       
    
    res.status(200).json({
        statistics: {
            totalUsers: `The total of all users is: ${users}`,
            usersByCountry: `The total of users living in ${req.query.pays} is: ${usersByCountry._count}`,
            genderDistribution: `The total of ${req.query.sexe} is: ${genderDistribution._count}`,
            avgPostsPerUser: `The post average for the user with id ${req.query.userId} is: ${avgPostsPerUser}`
        }
    });
});