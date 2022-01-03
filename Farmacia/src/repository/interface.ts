import { Pharmacy } from "../entities/pharmacy";
import { IPharmacyRequestDetails } from "../cases/IPharmacyRequestDetails";
import { Model } from "sequelize/dist";

export interface IPharmacyRepository{

    findByCNPJ(cnpj: string): Promise<Pharmacy>;
    save(pharmacy: Pharmacy): Promise<Model<any, any>>;
    delete(cnpj: string): Promise<void>;
    update(cnpj: string, atributes: Object): Promise<void>;
    addBranch(cnpj: string, newBranch: string): Promise<void>;
}