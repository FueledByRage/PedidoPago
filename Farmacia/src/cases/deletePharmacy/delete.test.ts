import { MariaDbImplementation } from '../../repository/implementations/mariaDB'
import { DeletePharmacy } from './deletePharmacyCase'

const mariaDnImplementation = new MariaDbImplementation()
const deletePharmacy = new DeletePharmacy(mariaDnImplementation)

test('Testing if it is deleting registers', async ()=>{
    const cnpj = '6'
    await deletePharmacy.execute(cnpj)
})

test('Testing if it get an error trying to delete a not registered vnpj', async ()=>{
    const notRegisteredCnpj = 'not_registered'
    const response = await deletePharmacy.execute(notRegisteredCnpj).catch((e)=>{
        expect(e)
    });
    expect(response).toBeUndefined();
})