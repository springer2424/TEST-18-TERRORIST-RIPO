import express from "express";
import { getDataCsv } from "../controlers/funcsions.js";


// import { createUser } from "../controllers/mongoDb.js";
// import { createMessege, dcriptMessege} from "../controllers/sqlDb.js";


const router = express.Router();

router.route("/data").get(getDataCsv)




export default router;