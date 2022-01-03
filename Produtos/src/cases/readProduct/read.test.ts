import { MariaDbImplementation } from "../../repository/implementations/mariaDB";
import { GetProduct } from "./getProduct";


const dbImplementation = new MariaDbImplementation();
const getProduct = new GetProduct(dbImplementation);

test('testing the read of register', async ()=>{
    const key = 'teste'
    const response = await getProduct.find(key);
    console.log(response);
    expect(response)
})
test('Test if it get a error trying to read a invalid register', async()=>{
    const invalidName = 'not valid'
    const response = await getProduct.find(invalidName).catch((error)=>{
        expect(error);
    })
    expect(response).toBeNull();
}) 