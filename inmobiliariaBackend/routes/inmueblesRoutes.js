const express = require("express");
const {
  list,
  inmuebleId,
  inmueblePost,
  consultaPost,
} = require("../controllers/inmuebles");
const router = express.Router();

router.get("/inmuebles", list);
router.get("/inmuebleid", inmuebleId);
router.post("/imuebles/post", inmueblePost);
router.post("/inmuebles/consulta/post", consultaPost);

module.exports = router;
