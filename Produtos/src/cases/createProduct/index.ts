import { CreateProduct } from "./createProductCase";
import { CreateController } from "./controller";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();

const createProduct = new CreateProduct(mariaDbImplementation);
const createController = new CreateController(createProduct);

export { createController, createProduct }