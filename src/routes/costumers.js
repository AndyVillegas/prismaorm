const { Router } = require("express");
const controller = require("../controllers/costumers");

const router = Router();

router.post('/', controller.createCostumer)
router.get('/', controller.findAllCostumers)
router.get('/:id', controller.findOneCostumer)
router.put('/:id', controller.updateCostumer)
router.delete('/:id', controller.deleteCostumer)

module.exports = router