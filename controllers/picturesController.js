const prisma = require('../prisma/prisma');
const asyncHandler = require('express-async-handler');

const getAllPictures = asyncHandler(async (req, res) => {
  const pictures = await prisma.picture.findMany();

  if (pictures.length === 0) {
    return res.status(404).json({ message: 'No pictures found' });
  }

  res.status(200).json({ pictures });
});

const getPictureById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const picture = await prisma.picture.findUnique({
    where: {
      id: Number(id)
    }
  });

  if (!picture) {
    return res.status(404).json({ message: `Picture with ID ${id} not found` });
  }

  res.status(200).json({ picture });
});

module.exports = {
  getAllPictures,
  getPictureById,
};
