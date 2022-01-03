import * as dotenv from 'dotenv';
dotenv.config();

export class Product{
    public thumbURL: string;
    public product_name : string;
    public price: string;
    public igredients: string;
    public disponibility: boolean;
    public volume: number;


    constructor(props){
        if(!props.thumbUrl || props.thumbUrl == '') props.thumbUrl = process.env.API;
        Object.assign(this, props);
    }
}