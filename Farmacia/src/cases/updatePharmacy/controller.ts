import { UpdatePharmacy } from "./updatePharmacy";

export class UpdatePharmacyController{

    constructor(private updatePharmacy: UpdatePharmacy){}

    async execute(call, callback){
        const { cnpj } = call.request;

        const response = await this.updatePharmacy.execute({cnpj: cnpj, atributes: call.request})

        callback(null, response);
    }
}