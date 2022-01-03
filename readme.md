Basta entrar nos diretorios dos microserviços e da api e utilizar os comandos

`yarn install`
para instalar as depedencias

e

`yarn run start`

para iniciar os serviços

Dentro dos microserviços ainda é possível utilizar testes para case diferentes, basta utilizar 

`yarn run <nome do case>`



# Farmacia

ENDPOINT | METHOD | PARAMS | EXPECTED SUCCESS | EXPECTED ERROR
---------|--------|--------|------------------|---------------|
/pharmacy | PUT | cnpj, pharmacy_name, manager, address, tel, opening, closeAt, logoURL | CODE 200 - ok Retorna Farmacia criada | CODE 500
/pharmacy/:cnpj| GET | cnpj | CODE 200 - ok Dados da farmacia com o cnpj fornecido | CODE 500
/pharmacy/update | PUT | cnpj, pharmacy_name, manager, address, tel, opening, closeAt, logoURL | CODE 200 - ok | CODE 500
/pharmacy/:cnpj | DELETE | cnpj | CODE 200 - ok User's data | CODE 500
/pharmacy/addBranch | POST | cnpj, branch | CODE 200 - ok Dados da Farmacia| CODE 500

#Produtos

# Produtos

ENDPOINT | METHOD | PARAMS | EXPECTED SUCCESS | EXPECTED ERROR
---------|--------|--------|------------------|---------------|
/product | PUT | product_name, thumbUrl, volume, igredients, disponibility, price | CODE 200 - ok Retorna Farmacia criada | CODE 500
/product/:name| GET | name | CODE 200 - ok Dados do produto com o name fornecido | CODE 500
/product/update | PUT | product_name, thumbUrl, volume, igredients, disponibility, price | CODE 200 - ok | CODE 500
/product/:id | DELETE | id | CODE 200 - ok User's data | CODE 500
/product/clone/:id | put | id | CODE 200 - ok Dados do produto clone| CODE 500