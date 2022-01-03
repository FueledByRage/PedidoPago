import { Product } from "../../entities/product";
import { IProductRepository } from "../../repository/interface";
import { IProductRequestDetails } from "../IProductRequestDetails";

export class CreateProduct{

    constructor( private productRepository: IProductRepository){}
    
    async execute(product: IProductRequestDetails){
        return new Promise(async (resolve, reject)=>{
            const alreadyRegistered = await this.productRepository.findByName(product.product_name).catch(error=>{return reject(new Error('Validation error.'))});


            if(alreadyRegistered) return reject('Product already exists.');
            
            const newProduct = new Product(product);
            
            const result = await this.productRepository.save(newProduct).catch((error)=>{
                return reject();
            })

            return resolve(result);
        })
    }
}