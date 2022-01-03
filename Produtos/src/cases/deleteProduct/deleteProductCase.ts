import { IProductRepository } from "../../repository/interface";


export class DeleteProduct{

    constructor(
        private productRepository: IProductRepository
    ){}
    
    async execute(id: number){
        return new Promise(async (resolve, reject)=>{
            const product = await this.productRepository.findById(id)

            if(!product) return reject('Product not found.')
    
            await this.productRepository.delete(id).catch((e)=>{
                return reject(new Error('Error deleting'));
            });

            resolve(true);
        })
    }
}