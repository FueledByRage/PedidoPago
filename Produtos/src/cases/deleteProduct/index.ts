import { DeleteProduct } from "./deleteProductCase";
import { DeleteController } from "./controller";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();

const deleteProduct = new DeleteProduct(mariaDbImplementation);
const deleteController = new DeleteController(deleteProduct);

export { deleteController, deleteProduct }