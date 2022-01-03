import { Pharmacy } from "../../entities/pharmacy";
import { IPharmacyRepository } from "../../repository/interface";
import { IPharmacyRequestDetails } from "../IPharmacyRequestDetails";

export class CreatePharmacy{

    constructor( private pharmacyRepository: IPharmacyRepository){}
    
    async execute(pharmacy: IPharmacyRequestDetails){
        return new Promise(async (resolve, reject)=>{
            const alreadyRegistered = await this.pharmacyRepository.findByCNPJ(pharmacy.cnpj).catch(error=>{return reject(new Error('Validation error.'))});
            
            if(alreadyRegistered) return reject();
            
            const newPharmacy = new Pharmacy(pharmacy);
            
            const result = await this.pharmacyRepository.save(newPharmacy).catch((error)=>{
                return reject(null);
            })

            return resolve(result);
        })
    }
}