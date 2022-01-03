import { Request, Response } from "express";
import { Pharmacy } from "../../entities/pharmacy";
import { GetPharmacy } from "./getPharmacy";

export class GetPharmacyController{

    constructor(public getPharmacy: GetPharmacy){}

    async find(call, callback){
        const { cnpj } = call.request;
        console.log(this)

        const response = await this.getPharmacy.find(cnpj);

        callback(null, response);
        return;
    }

}