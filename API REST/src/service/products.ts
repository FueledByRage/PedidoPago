import { load } from "../protob/loader"

export const ProductClient = load('ProductService', 'localhost:3000','product');