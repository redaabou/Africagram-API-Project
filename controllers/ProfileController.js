const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// add profile
exports.addProfile = async (req, res) => {
  // const {id_utilisateur} = req.body;
  
  const existingProfile = await prisma.profile.findUnique({
    where: { id_utilisateur: parseInt(req.body.id_utilisateur) },
  });

  if (existingProfile) {
    return res.status(400).json({ message: "Profile Already exsisting" });
  }

  try {
    const profile = await prisma.profile.create({
      data: req.body,
    });
    res.status(200).json({ success: "Profile added successfuly", profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    prisma.$disconnect();
  }
};

// get all profile
exports.getAllProfile = async (req, res) => {
  try {
    const profile = await prisma.profile.findMany();
    if (profile.length == 0) {
      return res.status(400).json({ message: "there is no profile found" });
    } else {
      return res.status(200).json(profile);
    }
  } catch (error) {
    res.status(400).json({ error: message.error });
  } finally {
    await prisma.$disconnect();
  }
};

// get one profile by id
exports.getProfileById = async (req, res) => {
  try {
    const Profile = await prisma.profile.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (Profile) {
      return res.status(200).json(Profile);
    } else {
      return res.status(400).json({ message:"Profile not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};

// update profile
exports.updateProfile = async (req, res) => {
  try {
    const existingProfile = await prisma.profile.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (!existingProfile) {
      return res.status(400).json({ message: "Profile not found" });
    }

    const profile = await prisma.profile.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    });
    res
      .status(200)
      .json({ success: "Profile updated succssfuly", data: profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};

// delete profile
exports.deleteProfile = async (req, res) => {
  try {
    const existingProfile = await prisma.profile.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (!existingProfile) {
      return res.status(400).json({ message: "Profile not found" });
    }

    const profile = await prisma.profile.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res
      .status(200)
      .json({
        success: `Profile with the id ${profile.id} deleted succssfuly`,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};
