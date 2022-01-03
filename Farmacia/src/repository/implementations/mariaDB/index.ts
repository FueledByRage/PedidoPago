import { Model } from "sequelize/dist";
import { PharmacyEntitie } from "../../../entities/mariadbEntities/pharmacyEntitie";
import { Pharmacy } from "../../../entities/pharmacy";
import { IPharmacyRepository } from "../../interface";

export class MariaDbImplementation implements IPharmacyRepository{


    constructor(){}

    async findByCNPJ(key: string): Promise<Pharmacy> {
        console.log(key);
        const pharmacy = await PharmacyEntitie.findOne({
            where:{
                cnpj: key
            },
            raw: true
        })
        if(pharmacy == null) return null;
        return new Pharmacy(pharmacy);
    }

    async save(pharmacy: Pharmacy): Promise<Model<any, any>> {
        return new Promise(async (resolve, reject)=>{
            try {
                const newPharmacy = await PharmacyEntitie.create(pharmacy).catch((error) =>{
                    throw error;
                })
                return resolve(newPharmacy);
                
            } catch (error) {
                return reject(error);
            }
        })
    }
    async update(cnpj: string, atributes: Object): Promise<void> {
        return new Promise((async( resolve, reject)=>{
            await PharmacyEntitie.update(atributes,{
                where: { cnpj: cnpj }
            }).catch((error) =>{
                return reject(error)
            })
            resolve();
        }))
        
    }
    async delete(cnpj: string): Promise<void> {
        return new Promise(async (resolve, reject)=>{
            await PharmacyEntitie.destroy({where: { cnpj: cnpj }}).catch((error) =>{
                return reject(error);
            })
            resolve();
        })
    }
    async addBranch(cnpj: string, newBranch: string): Promise<void> {
        return new Promise(async (resolve, reject)=>{
            try {
                const pharmacyOne = await PharmacyEntitie.findOne({where:{ cnpj: cnpj}});
                const pharmacyTwo = await PharmacyEntitie.findOne({where:{ cnpj: newBranch}});
                const branchesFull = this.checkBranches(pharmacyOne, pharmacyTwo);
        
                if(branchesFull) return reject(new Error('A pharmacy has reached the max number of branches allowed.')); 
        
                pharmacyOne.set('branches', [newBranch]);
                pharmacyTwo.set('branches', [cnpj]);
                await pharmacyOne.save();
                await pharmacyTwo.save();
                return resolve();
            } catch (error) {
                return reject(error);
            }
        });
    }
    checkBranches(pharmacy1: Model<any, any>, pharmacy2: Model<any, any>): boolean{
        const pharmacyOneBranches = pharmacy1.getDataValue('branches').split(';');
        const pharmacyTwoBranches = pharmacy2.getDataValue('branches').split(';');
        
        pharmacyOneBranches.pop();
        pharmacyTwoBranches.pop();
        return pharmacyOneBranches.length >= 3 || pharmacyTwoBranches.length >= 3;
    }
}