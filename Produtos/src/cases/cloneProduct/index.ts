import { CloneProductController } from "./controller";
import { CloneProduct } from "./cloneProduct";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();

const cloneProduct = new CloneProduct(mariaDbImplementation);
const cloneProductController = new CloneProductController(cloneProduct);

export { cloneProduct, CloneProductController }