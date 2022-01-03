import { UpdateProduct } from "./updateProduct";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();
const updateProduct = new UpdateProduct(mariaDbImplementation);


test('Testing update', async()=>{
    const id = 1
    const response = await updateProduct.execute({id: id, atributes:{product_name: 'new'}})
    expect(response).toBeTruthy();
})
test('Testing if an update on a not registered id', async()=>{
    //This id must not be registered
    const id = 25
    await updateProduct.execute({id: id, atributes:{product_name: 'new'}}).catch((error)=>{
        expect(error).toBe('Product not found.');
    })
    
})
