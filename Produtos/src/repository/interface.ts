import { Product } from "../entities/product";
import { Model } from "sequelize/dist";
import { IProductUpdateDetails } from "../cases/updateProduct/IProductUpdateDetails";

export interface IProductRepository{

    findByName(name: string): Promise<Product>;
    findById(id: number): Promise<Product>;
    save(pharmacy: Product): Promise<Model<any, any>>;
    delete(id: number): Promise<void>;
    update(details: IProductUpdateDetails): Promise<void>;
    findAll(): Promise<Product[]>;
    clone(id: number): Promise<Product>;
}