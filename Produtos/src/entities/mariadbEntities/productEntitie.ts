import { DataTypes } from "sequelize";
import { sequelizeConnection as db } from "../../database/db";
import * as dotenv from 'dotenv';
dotenv.config();

const ProductEntitie = db.define('pharmacy', {
    thumbUrl:{
        type: DataTypes.STRING,
        defaultValue:'http:/localhost:3333/upload/placeholder.png',
    },
    product_name:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    price:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    igredients:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    disponibility:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    volume:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    timestamps: false,
    tableName: 'product'
});
ProductEntitie.removeAttribute('id');
export { ProductEntitie }