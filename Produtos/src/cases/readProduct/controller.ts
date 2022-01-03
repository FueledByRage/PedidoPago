import { Request, Response } from "express";
import { GetProduct } from "./getProduct";

export class GetProductController{

    constructor(private getProduct: GetProduct){}

    async find(req: Request, res: Response): Promise<Response> {
        const { cnpj } = req.params;
        try {
            const product = await this.getProduct.find(cnpj)
            return res.status(200).send(product)
        } catch (error) {
            return res.status(404).json({message: error.message || 'Unexpected error.'})
        }
    }
    async findAll(req: Request, res: Response): Promise<Response> {
        const { cnpj } = req.body;
        try {
            const pharmacies = await this.getProduct.findAll()
            return res.status(200).send(pharmacies)
        } catch (error) {
            return res.status(404).json({message: error.message || 'Unexpected error.'})
        }
    }
}