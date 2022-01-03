import { MariaDbImplementation } from '../../repository/implementations/mariaDB'
import { AddBranch } from './addBranch'

const mariaDbImplementation = new MariaDbImplementation();
const addBranch = new AddBranch(mariaDbImplementation);

test('It must add a branch to both pharmacy with given cnpj',async()=>{
    const response = await addBranch.execute('test3', '42')
    expect(response).toBeTruthy();
})

/*
test('Testing if a pharmacy with 3 branches throw an error when a new branch is added', async()=>{
    const fullBranchesCnpj = '';
    const newBranch = '';
    const response = await addBranch.execute(fullBranchesCnpj, newBranch).catch((e)=>{
        console.log(e);
        expect(e).toBe('A pharmacy has reached the max number of branches allowed.');
    });
    expect(response).toBeUndefined();
})
*/