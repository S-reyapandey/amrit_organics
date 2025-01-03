import express from "express"
import { getBlog, getBlogById } from "../controllers/blogController.js";

const router = express.Router();

router.get("/getposts", getBlog);
router.get("/getpost/:id", getBlogById);

export default router;