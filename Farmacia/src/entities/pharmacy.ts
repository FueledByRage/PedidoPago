import * as dotenv from 'dotenv';
dotenv.config();

export class Pharmacy{
    public branches: string;
    public pharmacy_name : string;
    public cnpj: string;
    public logoUrl: string;
    public address: string;
    public opening: string;
    public closeAt: string;
    public manager: string;
    public tel: string;

    constructor(props){
        if(!props.branches) props.branches = '';
        if(!props.logoUrl) props.logoUrl = process.env.API;
        Object.assign(this, props)
    }
}