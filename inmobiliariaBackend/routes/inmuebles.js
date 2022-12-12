const express = require("express");
const {
  list,
  inmuebleId,
  inmueblePost,
  consultaPost,
  consultaAdmin,
  listAll,
  listFiltro,
  NumConsulta,
  consultaConsulta,
  inmuebleEdit,
  inmuebleDelete,
} = require("../controllers/inmuebles");
const { filtroValidator } = require("../validators/inmuebles");
const { runValidation } = require("../validators/inmuebles");

const router = express.Router();

router.get("/inmuebles", list);
router.post("/inmuebles/filtro", listFiltro);
router.get("/inmuebles/:id", inmuebleId);
router.get("/inmuebles/activos", consultaAdmin);
router.get("/inmuebles/get/todos", listAll);
router.post("/inmuebles/post", inmueblePost);
router.put("/inmuebles/edit", inmuebleEdit);
router.put("/inmuebles/delete", inmuebleDelete);
router.post("/inmuebles/consulta/post", consultaPost);
router.get("/inmuebles/consulta/num", NumConsulta);
router.get("/inmuebles/consulta/consulta", consultaConsulta);

module.exports = router;
