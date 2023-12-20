import sequelize from "../Config/db.sequelize.js";
import { Model, DataTypes } from 'sequelize';

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false            
        }
    },
    {
        sequelize,
        timestamps: true,
        underscored: true
    }
)

export default Category;