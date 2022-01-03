import { CreatePharmacy } from "./createPharmacyCase";

export class CreateController{

    constructor(private createPharmacy: CreatePharmacy){}

    async handleRequest(call, callback) {
        //const { cnpj, pharmacy_name, manager, tel, opening, closeAt, address, logoUrl } = call.request;
        const response = await  this.createPharmacy.execute(call.request).catch((error)=>{
            callback(null, {error: error})
        });

        return callback(null, true);
    }
}