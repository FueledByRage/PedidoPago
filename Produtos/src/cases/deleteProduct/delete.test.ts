import { MariaDbImplementation } from '../../repository/implementations/mariaDB'
import { DeleteProduct } from './deleteProductCase'

const mariaDnImplementation = new MariaDbImplementation()
const deleteProduct = new DeleteProduct(mariaDnImplementation)

test('Testing if it is deleting registers', async ()=>{
    const id = 1
    await deleteProduct.execute(id)
})

test('Testing if it get an error trying to delete a not registered vnpj', async ()=>{
    const notRegisteredId = 6;
    const response = await deleteProduct.execute(notRegisteredId).catch((e)=>{
        expect(e).toBe('Product not found.')
    });
    expect(response).toBeUndefined();
})