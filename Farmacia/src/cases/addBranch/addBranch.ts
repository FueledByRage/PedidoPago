import { IPharmacyRepository } from "../../repository/interface";

export class AddBranch{
    constructor( private pharmacyRepository: IPharmacyRepository ){}

    async execute(cnpj: string, newBranch: string){
        return new Promise(async (resolve, reject)=> {
            const pharmacy = await this.pharmacyRepository.findByCNPJ(cnpj);
            
            const branch = await this.pharmacyRepository.findByCNPJ(newBranch);
            
            if(!pharmacy || !branch ) return reject('Pharmacy or branch not found.');
    
            await this.pharmacyRepository.addBranch(cnpj, newBranch).catch((error) =>{
                return reject(error.message) });
            return resolve(true);
        })

    }
}