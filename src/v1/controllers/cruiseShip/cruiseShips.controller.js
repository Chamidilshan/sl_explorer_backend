const cruiseShipsModel = require("../../models/cruiseShips/cruiseShip.model");

const createCruiseShip = async (req, res) => {
  try {
    if (

        !req.body.shipName ||
        !req.body.packageName ||
        !req.body.packageCategoryName ||
        !req.body.packageDays ||
        !req.body.packageShortDescription ||
        !req.body.packageCoverDescription ||
        !req.body.packageCoverImage ||
        !req.body.packageImageLinks ||
        !req.body.packageTitle ||
        !req.body.packageSubTitle ||
        !req.body.packageTotalSeats ||
        !req.body.itenary ||
        !req.body.locations ||
        !req.body.services || 
        !req.body.hotels ||
        !req.body.packageDate ||
        !req.body.prices 

    ) {
      return res.status(400).send({ message: "Request body is missing!" });
    }

    const existingCategory = await CategoryModel.findOne({
      categoryName: req.body.packageCategoryName,
    });
    if (!existingCategory) {
      await CategoryModel.create({
        categoryName: req.body.packageCategoryName,
        categoryImage: req.body.packageCategoryImage,
      });
    }

    const newCruiseShip = {
        shipName: req.body.shipName,
        packageName: req.body.packageName,
        packageCategoryName: req.body.packageCategoryName,
        packageDays: req.body.packageDays,
        packageShortDescription: req.body.packageShortDescription,
        packageCoverDescription: req.body.packageCoverDescription,
        packageCoverImage: req.body.packageCoverImage,
        packageImageLinks: req.body.packageImageLinks,
        packageTitle: req.body.packageTitle,
        packageSubTitle: req.body.packageSubTitle,
        packageTotalSeats: req.body.packageTotalSeats,
        itenary: req.body.itenary,
        locations: req.body.locations,
        services: req.body.services,
        hotels: req.body.hotels,
        packageDate: req.body.packageDate,
        prices: req.body.price,
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

const getCruiseShipById = async (req, res) => {
  try {
    const data = await cruiseShipsModel.findById(req.params.packageId);
    if (!data) {
      return res.status(404).json({ message: "Cruise Ship not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" + error });
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

const updateCruiseShip = async (req, res) => {
  try {
    const newCruiseShip = {
      shipName: req.body.shipName,
      packageName: req.body.packageName,
      packageCategoryName: req.body.packageCategoryName,
      packageDays: req.body.packageDays,
      packageShortDescription: req.body.packageShortDescription,
      packageCoverDescription: req.body.packageCoverDescription,
      packageCoverImage: req.body.packageCoverImage,
      packageImageLinks: req.body.packageImageLinks,
      packageTitle: req.body.packageTitle,
      packageSubTitle: req.body.packageSubTitle,
      packageTotalSeats: req.body.packageTotalSeats,
      itenary: req.body.itenary,
      locations: req.body.locations,
      services: req.body.services,
      hotels: req.body.hotels,
      packageDate: req.body.packageDate,
      prices: req.body.price,
    };

    const cruiseShip = await cruiseShipsModel.findByIdAndUpdate(
      req.params.id,
      newCruiseShip
    );
    return res.status(201).send({ status: "success", data: cruiseShip });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCruiseShip = async (req, res) => {
  try {
    const result = await cruiseShipsModel.deleteOne({ _id: req.params.id });

    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Document deleted successfully" });
    } else {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" + error });
  }
};
const getCruiseShipsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const cruiseShips = await cruiseShipsModel.find({
      packageCategoryName: category,
    });
    res.json(cruiseShips);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCruiseShipsByPackageDays = async (req, res) => {
  try {
    const data = await cruiseShipsModel.find({
      packageDays: req.params.packageDays,
    });

    if (!data) {
      return res.status(404).json({ message: "Cruise Ships not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" + error });
  }
};

const getCruiseShipsByCategoryAndDuration = async (req, res) => {
  try {
    const { category, duration } = req.params;
    const cruiseShips = await cruiseShipsModel.find({
      packageCategoryName: category,
      packageDays: duration,
    });

    if (!cruiseShips) {
      return res.status(404).json({ message: "Cruise Ships not found" });
    }

    res.status(200).json(cruiseShips);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" + error });
  }
};


module.exports = {
  createCruiseShip,
  getCruiseShip,
  getCruiseShipPackage,
  getCruiseShipById,
  updateCruiseShip,
  deleteCruiseShip,
  getCruiseShipsByCategory,
  getCruiseShipsByPackageDays,
  getCruiseShipsByCategoryAndDuration,
};
