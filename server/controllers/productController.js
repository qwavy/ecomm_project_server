const uuid = require('uuid')
const path = require('path')
const { Product } = require('../modals/modals')
const ApiError = require('../error/ApiError')
class ProductController {
    async create(req, res) {
        try {
            const { name, price, typeId, info,img } = req.body
            // const { img } = req.files
            // let fileName = uuid.v4() + '.jpg'
            // img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({ name, price, img})

            return res.json(product)
        }
        catch (e) {
            console.log(e)
            // next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        const {typeId} = req.body
        let products
        products = await Product.findAll()
        return res.json(products)
    }
    async getOne(req, res) {
        const {name} = req.body
        let products
        products = await Product.findOne({where:{name:name}})
        return res.json(products)
    }
}
module.exports = new ProductController()