const {Basket} = require('../modals/modals')
const ApiError = require('../error/ApiError')
const {Product} = require("../modals/modals")
class BasketController {
    // async add(req,res){
    //     // const {name} = req.body
    //     const { name, price, typeId, info,img,product } = req.body
    //     const basket = await Basket.create({name,price,product})
    //     return res.json(basket)
    // }
    async add(req, res) {
        try {
            const { productName, productPrice, productImg } = req.body;
            const userId = 1; // Предполагаем, что у вас есть userId, который вы хотите привязать к корзине

            // Проверяем, есть ли уже корзина для данного пользователя
            let basket = await Basket.findOne({
                where: { userId },
            });

            if (!basket) {
                // Если корзина не существует, создаем ее
                basket = await Basket.create({ userId });
            }

            // Создаем новый продукт
            const product = await Product.create({
                name: productName,
                price: productPrice,
                img: productImg,
            });

            // Добавляем продукт в корзину с указанным количеством
            await basket.addProduct(product);

            // Возвращаем данные о корзине
            const updatedBasket = await Basket.findOne({
                where: { userId },
                include: Product, // Включаем связанный продукт
            });

            return res.json(updatedBasket);
        } catch (error) {
            console.error('Ошибка при добавлении товара в корзину:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async getBasket(req, res) {
        try {
            const baskets = await Basket.findAll();
            return res.json(baskets);
        } catch (error) {
            console.error('Ошибка при получении данных корзины:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new BasketController()