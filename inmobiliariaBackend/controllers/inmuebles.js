let knex = require("../config/knexfile.js");

exports.list = async (req, res) => {
  await knex("ubicacion")
    .join("inmuebles", "ubicacion.codeubicacion", "=", "inmuebles.ubicacion")
    .select(
      "inmuebles.codeinmueble",
      "inmuebles.tipoinueble",
      "inmuebles.tipooperacion",
      "inmuebles.dethabitacion",
      "inmuebles.precio",
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

exports.listFiltro = async (req, res) => {
  const { precioMin, precioMax, ubicacion, operacion } = req.body;

  await knex("ubicacion")
    .join("inmuebles", "ubicacion.codeubicacion", "=", "inmuebles.ubicacion")
    .where("tipooperacion", operacion)
    .andWhere("departamento", ubicacion)
    // .andWhere("inmuebles.precio", "<", precioMax)
    // .andWhere("inmuebles.precio", ">", precioMin)
    .select(
      "inmuebles.codeinmueble",
      "inmuebles.tipoinueble",
      "inmuebles.tipooperacion",
      "inmuebles.dethabitacion",
      "inmuebles.precio",
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

  await knex("ubicacion")
    .join("inmuebles", "ubicacion.codeubicacion", "=", "inmuebles.ubicacion")
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
          resultado: resultado[0],
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
            precio,
            codPropietario,
          } = req.body;
          console.log(props);
          knex("inmuebles")
            .insert({
              ubicacion: props[0].codeubicacion,
              tipoinueble: tipoInmueble,
              tipooperacion: tipoOperacion,
              detmet: detMet,
              detmetterreno: detMetTerreno,
              dethabitacion: detHabitacion,
              detbanios: detBanios,
              precio: precio,
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

  await knex("consultas")
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

exports.consultaAdmin = async (req, res) => {
  knex("inmuebles").then((response) => {
    res.json(response.length).catch((error) => {
      res.status(400).json({ error: error.message });
    });
  });
};

exports.listAll = async (req, res) => {
  knex("inmuebles")
    .join("ubicacion", "inmuebles.ubicacion", "=", "ubicacion.codeubicacion")
    .select("*")
    .then((response) => res.json(response))
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
