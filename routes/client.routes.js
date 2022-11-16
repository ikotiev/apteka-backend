const { Router } = require('express');
const { clientFunctionalitisControler } = require('../controllers/clientfunction.controller');

const router = Router();

router.get('/medicine/all', clientfunctionsController.getAllMedicine)
router.get('/medicine/all/cat', clientfunctionsController.getAllMedicineByСategories)
router.get('/medicine/medicine/:Id', clientfunctionsController.getMedicineById)
router.patch('/medicine/addmedicine/inbasket/:Id', clientfunctionsController.patchAddMedicineByIdInBasket)
router.delete('/medicine/', clientfunctionsController.DeleteMedicineByIdInBasket)
router.delete('/medicine/', clientfunctionsController.DeleteAllMedicineInBasket)
router.patch('/medicin/buy/:Id', clientfunctionsController.buyGoodsFromCart)
router.patch('/medicine/fill/:id', clientfunctionsController.fillUpTheWallet)


module.exports = router;
