import express from "express";
import user from "./user.router.js";
import PostTrabalho from "./postTrabalho.routes.js";
import postServico from "./postServico.routes.js";
import login from "./login.routes.js";

const router = express.Router();

router.use("/user", user);
router.use("/postTrabalho", PostTrabalho);
router.use("/postServico", postServico);
router.use("/login", login);

export default router;