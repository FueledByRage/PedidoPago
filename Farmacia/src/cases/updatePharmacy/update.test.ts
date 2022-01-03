import { UpdatePharmacy } from "./updatePharmacy";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();
const updatePharmacy = new UpdatePharmacy(mariaDbImplementation);


test('Testing update', async()=>{
    const cnpj = 'test'
    const response = await updatePharmacy.execute({cnpj: cnpj, atributes:{pharmacy_name: 'new'}})
    expect(response).toBeTruthy();
})
test('Testing if an update on a not registered cnpj', async()=>{
    //This cnpj must not be registered
    const cnpj = 'not_registered'
     await updatePharmacy.execute({cnpj: cnpj, atributes:{pharmacy_name: 'new'}}).catch((error)=>{
         expect(error);
     })
})
