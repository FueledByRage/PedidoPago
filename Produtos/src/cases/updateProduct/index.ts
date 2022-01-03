import { UpdateProduct } from "./updateProduct";
import { UpdateProductController } from "./controller";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();


const updateProduct = new UpdateProduct(mariaDbImplementation);
const updateProductController = new UpdateProductController(updateProduct);

export { updateProduct, updateProductController }