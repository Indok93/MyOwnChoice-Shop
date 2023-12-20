import sequelize from "../Config/db.sequelize.js";
import { Model, DataTypes } from 'sequelize';

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ProductName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Description: {
            type: DataTypes.TEXT,
            allowNull: false            
        },
        Price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        Stock: {
            type: DataTypes.TINYINT,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        underscored: true
    }
)

export default Product;