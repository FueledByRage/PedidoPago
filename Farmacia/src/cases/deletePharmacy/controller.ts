import { Pharmacy } from "../../entities/pharmacy";
import { DeletePharmacy } from "./deletePharmacyCase";

export class DeleteController{

    constructor(private deletePharmacy: DeletePharmacy){}

    async handleRequest(call, callback){
        const { cnpj } = call.request;
        const response = this.deletePharmacy.execute(cnpj);
        callback(null, true);
        return;
    }
}