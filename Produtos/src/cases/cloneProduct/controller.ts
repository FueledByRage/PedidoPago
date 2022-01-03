import { Request, Response } from "express";
import { CloneProduct } from "./cloneProduct";

export class CloneProductController{

    constructor(private getProduct: CloneProduct){}

    async clone(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const product = await this.getProduct.execute(parseInt(id))
            return res.status(200).send(product)
        } catch (error) {
            return res.status(404).json({message: error.message || 'Unexpected error.'})
        }
    }

}