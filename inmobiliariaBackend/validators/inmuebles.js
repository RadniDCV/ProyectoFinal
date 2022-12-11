const { check } = require("express-validator");

exports.filtroValidator = [
  check("ubicacion")
    .not()
    .isEmpty()
    .withMessage("El campo no debe estar vacio"),
];
