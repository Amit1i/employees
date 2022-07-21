const {Router }= require('express');
const controller = require ('./controller')

const router = Router();

router.get('/', controller.getEmployees);
router.get('/:eid', controller.getEmployeesByid);
router.get('/dep/:depid', controller.getEmpcountBydep);
router.post('/',controller.addemployees);

module.exports = router;