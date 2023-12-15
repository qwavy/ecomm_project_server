const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
router.post('/registration', userController.register)
router.get('/login',userController.login)
router.get('/auth', userController.check)

module.exports = router