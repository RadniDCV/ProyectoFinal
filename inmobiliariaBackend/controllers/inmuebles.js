let knex = require("../config/knexfile.js");

exports.list = async (req, res) => {
  const estado = 1;
  await knex("ubicacion")
    .join(
      "inmuebles",
      "ubicacion.codeubicacion",
      "=",
      "inmuebles.codeubicacion"
    )
    .select(
      "inmuebles.codeinmueble",
      "inmuebles.tipoinueble",
      "inmuebles.tipooperacion",
      "inmuebles.dethabitacion",
      "inmuebles.precioalquiler",
      "inmuebles.precioventa",
      "ubicacion.departamento",
      "ubicacion.ciudad",
      "ubicacion.barrio"
    )
    .then((inmuebles) => {
      res.json(inmuebles);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.inmuebleId = async (req, res) => {
  const id = req.params.id;

  await knex("inmuebles")
    .join(
      "ubicacion",
      "inmuebles.codeubicacion",
      "=",
      "ubicacion.codeubicacion"
    )
    .select("*")
    .where("codeinmueble", id)
    .then((inmuebles) => {
      res.json(inmuebles);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.inmueblePost = async (req, res) => {
  const { departamento, ciudad, barrio, calle, coordenadas, detalles } =
    req.body;

  await knex("ubicacion")
    .where("calle", calle)
    .then((resultado) => {
      if (resultado.length) {
        res.status(400).json({
          error: "Ya hay una propiedad con esa dirección",
          resultado: resultado,
        });
        return;
      }
      knex("ubicacion")
        .returning("codeubicacion")
        .insert({
          departamento: departamento,
          ciudad: ciudad,
          barrio: barrio,
          calle: calle,
          coordenadas: coordenadas,
          detalles: detalles,
        })
        .then((props) => {
          const {
            tipoInmueble,
            tipoOperacion,
            detMet,
            detMetTerreno,
            detHabitacion,
            detBanios,
            precioAlquiler,
            precioVenta,
            codPropietario,
          } = req.body;
          console.log(props);
          knex("inmuebles")
            .insert({
              codeubicacion: props[0].codeubicacion,
              tipoinueble: tipoInmueble,
              tipooperacion: tipoOperacion,
              detmet: detMet,
              detmetterreno: detMetTerreno,
              dethabitacion: detHabitacion,
              detbanios: detBanios,
              precioalquiler: precioAlquiler,
              precioventa: precioVenta,
              codpropietario: codPropietario,
            })
            .then(() => {
              res.json({
                props: props,
                mensaje: "La propiedad se ha añadido con éxito",
              });
            });
        });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.consultaPost = async (req, res) => {
  const { email, nombre, consulta } = req.body;

  knex("consultas")
    .insert({
      nombre: nombre,
      email: email,
      consulta: consulta,
    })
    .then((respuesta) => {
      props: respuesta, res.json("se ha añadido su consulta");
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
