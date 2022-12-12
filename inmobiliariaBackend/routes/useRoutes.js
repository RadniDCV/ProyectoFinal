const express = require("express");
const router = express.Router();
const {listUser, login, register, infoUser} = require("../controllers/user")
const {runValidation} = require("../validators/index")

const {userValidator, loginValidator} = require("../validators/user")
const {verifyToken} = require("../validators/auth");
const { verifyPerfil } = require("../validators/perfil");


router.get("/user/infoUser", verifyToken, infoUser)
router.get("/user/list", listUser),
router.post("/user/login",loginValidator,runValidation ,login),
router.post("/user/register",verifyToken,verifyPerfil,userValidator,runValidation, register)


module.exports = router;