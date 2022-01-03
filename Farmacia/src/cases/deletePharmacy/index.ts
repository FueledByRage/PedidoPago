import { DeletePharmacy } from "./deletePharmacyCase";
import { DeleteController } from "./controller";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();

const deletePharmacy = new DeletePharmacy(mariaDbImplementation);
const deleteController = new DeleteController(deletePharmacy);

export { deleteController, deletePharmacy }