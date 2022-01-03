import { IPharmacyRepository } from "../../repository/interface";

export class GetPharmacy{
    constructor( private pharmacyRepository: IPharmacyRepository ){}

    async find(cnpj: string){
        return new Promise(async (resolve, reject)=>{
            const pharmacy = this.pharmacyRepository.findByCNPJ(cnpj);
    
            if(pharmacy == null) return reject(new Error('Pharmacy not found.'))
    
            return resolve(pharmacy);
        })
    }
}