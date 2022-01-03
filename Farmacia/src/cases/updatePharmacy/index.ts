import { UpdatePharmacy } from "./updatePharmacy";
import { UpdatePharmacyController } from "./controller";
import { MariaDbImplementation } from "../../repository/implementations/mariaDB";

const mariaDbImplementation = new MariaDbImplementation();


const updatePharmacy = new UpdatePharmacy(mariaDbImplementation);
const updatePharmacyController = new UpdatePharmacyController(updatePharmacy);

export { updatePharmacy, updatePharmacyController }