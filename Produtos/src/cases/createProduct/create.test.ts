import { Model } from 'sequelize/dist';
import { MariaDbImplementation } from '../../repository/implementations/mariaDB'
import { CreateProduct } from './createProductCase'

const dbImplementation = new MariaDbImplementation();
const createProduct = new CreateProduct(dbImplementation);

test('Testing the create product case', async ()=>{
    const result = await createProduct.execute({thumbUrl: '', product_name: 'teste2', disponibility: true, thumbURL: ' ', price: '25.0', igredients: 'test', volume: 2}).catch((e)=>{console.log(e)});
    expect(result);
})

test('Testing if it is possible to register the same product again',async ()=>{
    const productAlreadyInUse = 'test'
    const result = await createProduct.execute({thumbUrl: '',product_name: productAlreadyInUse, disponibility: true, thumbURL: ' ', price: '25.0', igredients: 'test', volume: 2}).catch((e)=>{console.log(e)}).catch((error) =>{
        expect(error).toBe('Product already exists.');
    })
})