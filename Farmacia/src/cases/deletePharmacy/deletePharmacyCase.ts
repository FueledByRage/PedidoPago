import { IPharmacyRepository } from "../../repository/interface";


export class DeletePharmacy{

    constructor(
        private pharmacyRepository: IPharmacyRepository
    ){}
    
    async execute(cnpj: string){
        return new Promise(async (resolve, reject)=>{
            const pharmacy = await this.pharmacyRepository.findByCNPJ(cnpj);

            if(!pharmacy) return reject(false);
    
            await this.pharmacyRepository.delete(cnpj).catch((e)=>{
                return reject(false);
            });

            resolve(true);
        })
    }
}