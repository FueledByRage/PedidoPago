import { GetProductController } from "./controller";
import { GetProduct } from "./getProduct";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();

const getProduct = new GetProduct(mariaDbImplementation);
const getProductController = new GetProductController(getProduct);

export { getProduct, getProductController }