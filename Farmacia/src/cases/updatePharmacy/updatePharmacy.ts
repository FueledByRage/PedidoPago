import { IPharmacyRepository } from "../../repository/interface";
import { IPharmacyUpdateDetails } from "./IPharmacyUpdateDetails";

export class UpdatePharmacy{
    constructor( private pharmacyRepository: IPharmacyRepository ){}

    async execute(updateDetails: IPharmacyUpdateDetails){
        return new Promise(async (resolve, reject)=>{
            await this.pharmacyRepository.update(updateDetails.cnpj, updateDetails.atributes).catch((error)=>{
                return reject(error);
            })

            resolve(true);
        })
    }
}