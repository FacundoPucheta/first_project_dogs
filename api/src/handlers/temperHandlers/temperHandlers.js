const getAllTemper = require("../../controllers/temperController/AllTemper");

const allTemper = async (req, res) => {
  try {
    const temperaments = await getAllTemper();
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = allTemper;
