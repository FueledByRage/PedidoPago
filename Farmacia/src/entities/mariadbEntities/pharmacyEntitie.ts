import { DataTypes } from "sequelize";
import { sequelizeConnection as db } from "../../database/db";

export const PharmacyEntitie = db.define('pharmacy', {
    cnpj:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    logoUrl:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    pharmacy_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    manager:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    tel:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    opening:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    closeAt:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    branches:{
        type: DataTypes.STRING, 
        get(){
            const branches = this.getDataValue('branches');
            if(branches) return branches.split(';')
        },
        set(val: string){
            if(val == ''){
                this.setDataValue('branches', '')
                return;
            }
            var branches = this.getDataValue('branches');
            if(branches == '') {
                this.setDataValue('branches', `${val};`);
                return;
            }
            this.setDataValue('branches', `${branches}${val};`);
            
            
        }
    },

},{
    timestamps: false,
    tableName: 'Pharmacy'
});