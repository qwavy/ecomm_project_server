const uuid = require('uuid')
const path = require('path')
const { Product, characteristicLaptop } = require('../modals/modals')
const ApiError = require('../error/ApiError')
class ProductController {
    async create(req, res) {
        try {
            const { name, price, img, category,processer,processer_model,ram,ssd,display,display_hz,video_card } = req.body
            let productCharacteristic
            // const { img } = req.files
            // let fileName = uuid.v4() + '.jpg'
            // img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({ name, price, img,category,processer,processer_model,ram,ssd,display,display_hz,video_card})
            if(category == "laptop"){
                productCharacteristic = await characteristicLaptop.create({processer,processer_model,ram,ssd,display,display_hz,video_card})
            }
            console.log(characteristic)
            return res.json(product,productCharacteristic)
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