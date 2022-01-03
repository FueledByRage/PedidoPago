import { Product } from "../../entities/product";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";
import { CloneProduct } from "./cloneProduct";


const dbImplementation = new MariaDbImplementation();
const cloneProduct = new CloneProduct(dbImplementation);

test('testing the cloning', async ()=>{
    const id = 2
    const response = await cloneProduct.execute(id);
    expect(response).toBeInstanceOf(Product);
})
test('Test if it get a error trying to read a invalid register', async()=>{
    const invalidId = 66
    const response = await cloneProduct.execute(invalidId).catch((error)=>{
        expect(error);
    })
    expect(response).toBeUndefined();
}) 