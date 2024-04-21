const cruiseShipsModel = require("../../models/cruiseShips/cruiseShip.model");

const createCruiseShip = async (req, res) => {
  try {
    if (
    
        !req.body.packageName ||
        !req.body.packageShortDescription ||
        !req.body.packageCoverDescription ||
        !req.body.packageCoverImage ||
        !req.body.packageImageLinks ||
        !req.body.packageTitle ||
        !req.body.packageSubTitle ||
        !req.body.packageTotalSeats ||
        !req.body.itenary ||
        !req.body.hotels ||
        !req.body.prices 

    ) {
      return res.status(400).send({ message: "Request body is missing!" });
    }

    const newCruiseShip = {
        packageName: req.body.packageName,
        packageShortDescription: req.body.packageShortDescription,
        packageCoverDescription: req.body.packageCoverDescription,
        packageCoverImage: req.body.packageCoverImage,
        packageImageLinks: req.body.packageImageLinks,
        packageTitle: req.body.packageTitle,
        packageSubTitle: req.body.packageSubTitle,
        packageTotalSeats: req.body.packageTotalSeats,
        itenary: req.body.itenary,
        hotels: req.body.hotels,
        prices: req.body.prices,
      };

    const cruiseShip = await cruiseShipsModel.create(newCruiseShip);
    return res.status(201).send({ status: "success", data: cruiseShip });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCruiseShip = async (req, res) => {
  try {
    const data = await cruiseShipsModel.find().populate("hotels.hotel").exec();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCruiseShipPackage = async (req, res) => {
  try {
    const data = await cruiseShipsModel.findById(req.params.id)
      .populate("hotels.hotel")
      .exec();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createCruiseShip,
  getCruiseShip,
  getCruiseShipPackage,
};
