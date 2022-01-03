import { CreatePharmacy } from "./createPharmacyCase";
import { CreateController } from "./controller";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();

const createPharmacy = new CreatePharmacy(mariaDbImplementation);
const createController = new CreateController(createPharmacy);

export { createController, createPharmacy }