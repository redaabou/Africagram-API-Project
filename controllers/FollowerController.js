const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// add follower
exports.addFollower = async (req, res) => {
  try {
    const follower = await prisma.follower.create({
      data: req.body,
    });
    res.status(200).json({ success: "Follower added successfuly" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    prisma.$disconnect;
  }
};

// get all follower
exports.getAllFollwer = async (req, res) => {
  try {
    const follower = await prisma.follower.findMany();
    if (follower.length == 0) {
      return res.status(400).json({ message: "there is no Follower found" });
    } else {
      return res.status(200).json(follower);
    }
  } catch (error) {
    res.status(400).json({ error: message.error });
  } finally {
    await prisma.$disconnect();
  }
};

// delete follower
exports.deleteFollower = async (req, res) => {
  try {
    const follower = await prisma.follower.delete({
      where: { id: parseInt(req.params.id) },
    });

    if (!follower) {
      return res
        .status(400)
        .json({ error: "No follower found with the provided id" });
    }

    res.status(200).json({
      success: `Follower with the id ${follower.id} deleted successfully`,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } finally {
    prisma.$disconnect();
  }
};
