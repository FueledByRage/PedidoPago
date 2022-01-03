import { Request, Response } from "express";
import { DeleteProduct } from "./deleteProductCase";

export class DeleteController{

    constructor(private deleteProduct: DeleteProduct){}

    async handleRequest(req: Request, res: Response): Promise<Response> {
        const { cnpj } = req.body;
        try {
            await this.deleteProduct.execute(cnpj)
            return res.status(200).send()
        } catch (error) {
            return res.status(400).json({message: error.message || 'Unexpected error.'})
        }
    }
}