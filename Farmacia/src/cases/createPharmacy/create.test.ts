import { Model } from 'sequelize/dist';
import { MariaDbImplementation } from '../../repository/implementations/mariaDB'
import { CreatePharmacy } from './createPharmacyCase'

const dbImplementation = new MariaDbImplementation();
const createPharmacy = new CreatePharmacy(dbImplementation);

test('Testing the create pharmacy case', async ()=>{
    const result = await createPharmacy.execute({cnpj: '42', pharmacy_name: 'teste', manager: 'teste', opening: 'teste', closeAt: 'teste', 
    address: 'teste', tel: 'teste', logoUrl: ''}).catch((e)=>{console.log(e)});
    expect(result).toBeInstanceOf(Model);
})
/*
test('Testing whether it is possible to register the same cnpj again',async ()=>{
    const cnpjAlreadyInUse = 'test'
    const result = await createPharmacy.execute({cnpj: cnpjAlreadyInUse, pharmacy_name: 'teste', manager: 'teste', opening: 'teste', closeAt: 'teste', 
    address: 'teste', tel: 'teste', logoUrl: ''}).catch((error) =>{
        expect(error.message).toBe('Pharmacy already exists.');
    })

})*/