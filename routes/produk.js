const router = require("express").Router();
const produkController = require("../controllers/produkController");

router.get("/", produkController.viewProduk);
router.post("/", produkController.addProduk);
router.put("/", produkController.editProduk);
router.delete("/:id", produkController.deleteProduk);

module.exports = router;