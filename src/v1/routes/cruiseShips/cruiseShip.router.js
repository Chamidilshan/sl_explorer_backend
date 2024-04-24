const express = require('express');
const router = express.Router();
const cruiseShipsController = require('../../controllers/cruiseShip/cruiseShips.controller'); 

router.post("/", cruiseShipsController.createCruiseShip);
router.get("/", cruiseShipsController.getCruiseShip); 
router.put("/:id",  cruiseShipsController.updateCruiseShip);
router.delete("/:id", cruiseShipsController.deleteCruiseShip);
router.get("/:id", cruiseShipsController.getCruiseShipPackage);
router.get("/package/:packageId", cruiseShipsController.getCruiseShipById);
router.get("/:packageDays", cruiseShipsController.getCruiseShipsByPackageDays);
router.get("/:category", cruiseShipsController.getCruiseShipsByCategory);
router.get(
  "/:category/:duration",
  cruiseShipsController.getCruiseShipsByCategoryAndDuration
);



module.exports = router;