const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

// add user
exports.AddUser = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await prisma.utilisateur.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  // hash the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const User = await prisma.utilisateur.create({
      data: {
        ...req.body,
        password: hashedPassword,
      },
    });
    res.status(200).json({ success: "User added successfully", User });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const Users = await prisma.utilisateur.findMany({
      include:{profile:true},
      skip: +req.query.skip,
      take: +req.query.take
    });
    res.status(200).json(Users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};

// get one user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await prisma.utilisateur.findUnique({
      include:{profile:true},
      where: {id:parseInt(req.params.id)}
    })

    if(user){
      return res.status(200).json(user)
      
    }else{
      return res.status(400).json({message:"User not found"})
    }

  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}

// modify user
exports.updateUser = async (req, res) => {
  console.log(req.body);
  try {
    const existingUser = await prisma.utilisateur.findUnique({
      where:{
        id:parseInt(req.params.id)
      }
    })
  
    if(!existingUser){return res.status(400).json({message:"User not found"})}

    const user = await prisma.utilisateur.update({
      where:{
        id:parseInt(req.params.id)
      },
      data: req.body
    })
    res.status(200).json({success:"User updated succssfuly", data: user})

  } catch (error) {
    res.status(400).json({error: error.message})
  }finally {
    await prisma.$disconnect();
  }


}

// delete user by id 
exports.deleteUser = async (req, res) => {
  try {
    const existingUser = await prisma.utilisateur.findUnique({
      where:{
        id: parseInt(req.params.id)
      }
    })

    if (!existingUser) {return res.status(400).json({message:"User not found"})}

    const user = await prisma.utilisateur.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.status(200).json({success:`User with the Id ${user.id} deleted successfuly`})

  } catch (error) {
    res.status(400).json({error: message.error})
  }finally{
    await prisma.$disconnect()
  }
}
