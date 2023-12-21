const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')


router.post('/basket',basketController.add)
router.get('/get',basketController.getBasket)
// router.get('/:id',productController.getOne)


module.exports = router