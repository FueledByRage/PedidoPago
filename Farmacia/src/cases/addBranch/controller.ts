import { AddBranch } from "./addBranch";


export class AddBrancheController{

    constructor(private addBranch: AddBranch){}

    async add(call, callback){
        try {
            const { cnpj, branch } = call.request;
            await this.addBranch.execute(cnpj, branch).catch((e)=>{
                throw e;
            })
        } catch (error) {
            callback(null, {error: error})
        }
    }
}