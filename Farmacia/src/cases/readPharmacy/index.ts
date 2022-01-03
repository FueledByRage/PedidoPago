import { GetPharmacyController } from "./controller";
import { GetPharmacy } from "./getPharmacy";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();

const getPharmacy = new GetPharmacy(mariaDbImplementation);
const getPharmacyController = new GetPharmacyController(getPharmacy);

export { getPharmacy, getPharmacyController }