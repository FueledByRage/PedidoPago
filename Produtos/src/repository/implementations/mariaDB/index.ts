import { Model } from "sequelize/dist";
import { IProductUpdateDetails } from "../../../cases/updateProduct/IProductUpdateDetails";
import { ProductEntitie } from "../../../entities/mariadbEntities/productEntitie";
import { Product } from "../../../entities/product";
import { IProductRepository } from "../../interface";

export class MariaDbImplementation implements IProductRepository{


    constructor(){}

    async findByName(name: string): Promise<Product> {
        const product = await ProductEntitie.findOne({
            where:{
                product_name: name
            },
            raw: true
        })

        if(product == null) return null;
        return new Product(product);
    }

    async findById(key: number): Promise<Product> {
        const product = await ProductEntitie.findOne({
            where:{
                id: key
            },
            raw: true
        })

        if(product == null) return null;
        return new Product(product);
    }
    async findAll(): Promise<Product[]> {
        return
    }
    async save(product: Product): Promise<Model<any, any>> {
        return new Promise(async (resolve, reject)=>{
            try {
                const newProduct = await ProductEntitie.create(product).catch((error) =>{
                    throw error;
                })
                return resolve(newProduct);
                
            } catch (error) {
                return reject(error.message);
            }
        })
    }
    async update(details: IProductUpdateDetails): Promise<void> {
        return new Promise((async( resolve, reject)=>{
            await ProductEntitie.update(details.atributes,{
                where: { product_name: details.name }
            }).catch((error) =>{
                return reject()
            })
            resolve();
        }))
        
    }
    async delete(id: number): Promise<void> {
        return new Promise(async (resolve, reject)=>{
            await ProductEntitie.destroy({where: { id: id }}).catch((error) =>{
                return reject(error);
            })
            resolve();
        })
    }
    async clone(id: number):Promise<Product>{
        return new Promise(async (resolve, reject)=>{
            const product = await ProductEntitie.findOne({
                attributes: {exclude: ['id'] },
                where:{
                    id: id
                },
                raw: true
            });
            var newProduct = new Product(product);
            newProduct.product_name = `${newProduct.product_name} - clone`
            await ProductEntitie.create(newProduct).catch((e)=>{
                reject('Error saving clone.')
            });
            return resolve(newProduct);
        });
    }
}