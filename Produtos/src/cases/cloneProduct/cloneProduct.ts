import { IProductRepository } from "../../repository/interface";

export class CloneProduct{
    constructor( private productRepository: IProductRepository ){}

    async execute(id: number){
        return new Promise(async(resolve, reject)=>{
            const registered = await this.productRepository.findById(id)
    
            if(!registered) return reject('Product not found.')
    
            const clone = await this.productRepository.clone(id).catch((e)=>{
                return reject('Error cloning product.')
            })
            console.log(clone);
            return resolve(clone);
        })
    }
}