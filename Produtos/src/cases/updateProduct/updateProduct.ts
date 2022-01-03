import { Product } from "../../entities/product";
import { IProductRepository } from "../../repository/interface";
import { IProductUpdateDetails } from "./IProductUpdateDetails";

export class UpdateProduct{
    constructor( private productRepository: IProductRepository ){}

    async execute(details: IProductUpdateDetails){
        return new Promise(async (resolve, reject)=>{
            const registered = await this.productRepository.findByName(details.name);

            if(!registered) return reject('Product not found.');

            await this.productRepository.update(details).catch((error)=>{
                return reject(error);
            })

            resolve(true);
        })
    }
}