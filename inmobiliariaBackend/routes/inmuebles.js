const express = require("express");
const {
  list,
  inmuebleId,
  inmueblePost,
  consultaPost,
  consultaAdmin,
  listAll,
  listFiltro,
} = require("../controllers/inmuebles");
const { filtroValidator } = require("../validators/inmuebles");
const { runValidation } = require("../validators/inmuebles");

const router = express.Router();

router.get("/inmuebles", list);
router.get("/inmuebles/filtro", listFiltro);
router.get("/inmuebles/:id", inmuebleId);
router.get("/inmuebles/activos", consultaAdmin);
router.get("/inmuebles/get/todos", listAll);
router.post("/inmuebles/post", inmueblePost);
router.post("/inmuebles/consulta/post", consultaPost);

module.exports = router;
