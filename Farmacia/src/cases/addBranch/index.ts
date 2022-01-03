import { MariaDbImplementation } from "../../repository/implementations/mariaDB";
import { AddBranch } from "./addBranch";
import { AddBrancheController } from "./controller";

const mariaDbImplementation = new MariaDbImplementation();

const addBranch = new AddBranch(mariaDbImplementation);
const addBrancheController = new AddBrancheController(addBranch);

export { addBranch, addBrancheController }