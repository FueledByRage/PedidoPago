import { MariaDbImplementation } from "../../repository/implementations/mariaDB";
import { GetPharmacy } from "./getPharmacy";


const dbImplementation = new MariaDbImplementation();
const getPharmacy = new GetPharmacy(dbImplementation);

test('testing the read of register', async ()=>{
    const key = 'test'
    const response = await getPharmacy.find(key);
    console.log(response);
    expect(response)
})
test('Test if it get a error trying to read a invalid register', async()=>{
    const invalidCNPJ = 'not valid'
    const response = await getPharmacy.find(invalidCNPJ).catch((error)=>{
        expect(error);
    })
    expect(response).toBeNull();
}) 