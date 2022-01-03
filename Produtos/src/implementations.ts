import { createProduct } from "./cases/createProduct";
import { getProduct } from "./cases/readProduct";
import { updateProduct } from "./cases/updateProduct";
import { deleteProduct } from "./cases/deleteProduct";
import { cloneProduct } from "./cases/cloneProduct";
/*
const add = addBrancheController.add
const create = createController.handleRequest
const update = updateProductController.execute
const read = getProductController.find
const del = deleteController.handleRequest
*/

export async function read(call, callback){
    const res = await getProduct.find(call.request.name);
    if(!res) return callback(null, {error: 'Register not found.'});
    return callback(null, {product: res});
}
export async function create(call, callback){
    
    const response = await createProduct.execute(call.request.product);
    return callback(null, {product: response});
} 

export async function update(call, callback){
    const { product_name } = call.request.product;
    const response = await updateProduct.execute({name: product_name, atributes: call.request.product}).catch((e)=>{
        callback(null,{done: false })
    })

    callback(null,{done: true});
}
export async function del(call, callback){
    const { id } = call.request;

    await deleteProduct.execute(parseInt(id)).catch((e)=>{
        callback(null, {done: false});
    });
    callback(null, {done: true})
}

export async function clone(call, callback){
    const { id } = call.request;

    const response = await cloneProduct.execute(parseInt(id));
    //@ts-ignore
    callback(null, {product: response});
}


