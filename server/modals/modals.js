const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email:{type: DataTypes.STRING,unique:true},
    password:{type: DataTypes.STRING,},
    role:{type: DataTypes.STRING,defaultValue:"USER"},
})

const Basket = sequelize.define('basket',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

const BasketProduct = sequelize.define('basket_product',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

const Product = sequelize.define('product',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    price:{type:DataTypes.INTEGER,allowNull:false},
    img:{type:DataTypes.STRING,allowNull:false},
})

const Type = sequelize.define('type',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
})

const characteristicLaptop = sequelize.define('characteristic_laptop',{
    processer:{type: DataTypes.STRING,allowNull:false},
    processer_model:{type: DataTypes.STRING,allowNull:false},
    ram:{type: DataTypes.INTEGER,allowNull:false},
    ssd:{type: DataTypes.INTEGER,allowNull:false},
    display:{type: DataTypes.INTEGER,allowNull:false},
    display_hz:{type: DataTypes.INTEGER,allowNull:false},
    video_card:{type: DataTypes.STRING,allowNull:false}
})

const characteristicDekstop = sequelize.define('characteristic_dekstop',{
    processer:{type: DataTypes.STRING,allowNull:false},
    processer_model:{type: DataTypes.STRING,allowNull:false},
    motherboard:{type:DataTypes.STRING,allowNull:false},
    ram:{type: DataTypes.INTEGER,allowNull:false},
    ssd:{type: DataTypes.INTEGER,allowNull:false},
    video_card:{type: DataTypes.STRING,allowNull:false},
    block_power:{type:DataTypes.INTEGER,allowNull:false},
    type_ram:{type: DataTypes.STRING,allowNull:false},
})

const characteristicMonitor = sequelize.define('characteristic_monitor',{
    response_time:{type: DataTypes.STRING,allowNull:false},
    display:{type: DataTypes.INTEGER,allowNull:false},
    display_hz:{type:DataTypes.INTEGER,allowNull:false},
    matrix:{type: DataTypes.STRING,allowNull:false},
    resolution:{type: DataTypes.STRING,allowNull:false},
    color_depth:{type: DataTypes.STRING,allowNull:false},
    brightness:{type: DataTypes.INTEGER,allowNull:false},
})

const characteristicMotherboard = sequelize.define('characteristic_motherboard',{
    socket:{type: DataTypes.STRING,allowNull:false},
    chipset:{type: DataTypes.STRING,allowNull:false},
    max_ram:{type:DataTypes.INTEGER,allowNull:false},
    type_ram:{type: DataTypes.STRING,allowNull:false},
    form_factor:{type: DataTypes.STRING,allowNull:false},
    max_ram_hz:{type: DataTypes.INTEGER,allowNull:false},
    audio_chip:{type: DataTypes.STRING,allowNull:false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasOne(BasketProduct)
BasketProduct.belongsTo(Basket)


const characteristics = (characteristicLaptop,characteristicDekstop,characteristicMonitor,characteristicMotherboard)
Product.hasMany(characteristics)
characteristics.belongsTo(Product)