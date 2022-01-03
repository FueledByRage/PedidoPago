import { IProductRepository } from "../../repository/interface";

export class GetProduct{
    constructor( private productRepository: IProductRepository ){}

    async find(name: string){
        return new Promise(async (resolve, reject)=>{
            const product = this.productRepository.findByName(name).catch((e) =>{ reject(new Error('Error searching for register.'))});
    
            if(!product) return reject(new Error('Product not found.'))
    
            return resolve(product);
        })
    }
    async findAll(){
        const products = this.productRepository.findAll();
        return products;
    }
}