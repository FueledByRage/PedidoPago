import { addBrancheController, addBranch } from "./cases/addBranch"
import { createController, createPharmacy } from "./cases/createPharmacy"
import { updatePharmacyController, updatePharmacy } from "./cases/updatePharmacy"
import { getPharmacyController, getPharmacy } from "./cases/readPharmacy"
import { deleteController, deletePharmacy } from "./cases/deletePharmacy"
/*
const add = addBrancheController.add
const create = createController.handleRequest
const update = updatePharmacyController.execute
const read = getPharmacyController.find
const del = deleteController.handleRequest
*/

export async function read(call, callback){
    const res = await getPharmacy.find(call.request.cnpj);
    if(!res) return callback(null, {error: 'Register not found.'});
    return callback(null, {pharmacy: res});
}
export async function create(call, callback){
    
    const response = await createPharmacy.execute(call.request.pharmacy);
    return callback(null, {pharmacy: response});
} 

export async function update(call, callback){
    const { cnpj } = call.request.pharmacy;
    const response = await updatePharmacy.execute({cnpj: cnpj, atributes: call.request.pharmacy}).catch((e)=>{
        callback(null,{done: false })
    })

    callback(null,{done: true});
}
export async function del(call, callback){
    const { cnpj } = call.request;

    await deletePharmacy.execute(cnpj).catch((e)=>{
        callback(null, {done: false});
    });
    callback(null, {done: true})
}
export async function add(call, callback){
    const { cnpj, branch } = call.request;
    await addBranch.execute(cnpj, branch).catch((e)=>{
        callback(null, {done: null})
    });
    callback(null, {done: true})
} 

