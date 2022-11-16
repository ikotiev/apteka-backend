const { Router } = require('express');
const { adminControler } = require('../controllers/admins.controller');

const router = Router();

router.post('/admin/pass', adminControler.postMedicine);
router.patch('/admin/pass/:Id', adminControler.patchMedicine);
router.delete('/admin/pass/:Id', adminControler.deleteMedicine)

router.post('/admin/pass/drug', adminControler.postDrugcategories);
router.patch('/admin/pass/drug/:Id', adminControler.patchDrugcategories);
router.delete('/admin/pass/drug/:Id', adminControler.deleteDrugcategories)




module.exports = router;
