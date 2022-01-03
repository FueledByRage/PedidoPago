import { Request, Response } from "express";
import { UpdateProduct } from "./updateProduct";

export class UpdateProductController{

    constructor(private updateProduct: UpdateProduct){}

    async execute(req: Request, res: Response): Promise<Response> {
    }
}