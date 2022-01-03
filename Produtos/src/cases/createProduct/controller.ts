import { Request, Response } from "express";
import { CreateProduct } from "./createProductCase";

export class CreateController{

    constructor(private createProduct: CreateProduct){}

    async handleRequest(req: Request, res: Response): Promise<Response> {
        
    }
}