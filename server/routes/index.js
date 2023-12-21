const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const basketRouter = require('./BasketRouter')

router.use('/user',userRouter)
router.use('/product',productRouter)
router.use('/type',typeRouter)
router.use('/basket',basketRouter)

module.exports = router