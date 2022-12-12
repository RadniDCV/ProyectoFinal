
const knex = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.infoUser = (req,  res) => {
  res.json(req.user.nombre);
}


exports.listUser = (req, res) => {
  knex("users")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.register = async (req, res) => {
  const {nombre,passw,email, tipousuario} = req.body;
  console.log()
  const salt = await bcrypt.genSalt(10);
  const passwEncrypt = await bcrypt.hash(passw, salt);

  knex("users")
    .where({ email: email })
    .then((resultado) => {
      if (resultado.length) {
        res.status(400).json({ error: "el email ya esta siendo utilizado" });
        return;
      }
      knex("users")
        .insert({
          nombre: nombre,
          passw: passwEncrypt,
          email: email,
          tipousuario: tipousuario,
        })
        .then(() => {
          res.json({
            success: true,
            mensaje: "El usuario se ha registrado correctamente",
            
          });
        })
        .catch((error) => {
          res.status(400).json({ error: error.message });
        });
    });
   
};

exports.login = (req, res) => {
  const { email, passw } = req.body;
  knex("users")
    .where({ email: email })
    .then(async (resultado) => {
      if (!resultado.length) {
        res.status(404).json({
          error: "Contraseña incorrecta/s",
        });
        return;
      }
      /* Logging the password from the database and the password from the request. */
  
      const validatePassword = await bcrypt
    
      .compare(passw, resultado[0].passw)
  
      if (!validatePassword) {
     
        res.status(404).json({
          error: "Email y/o contraseña incorrecta/s",
        });
        return;
      }
      const token = jwt.sign(
        {
          nombre: resultado[0].nombre,
          email: resultado[0].email,
          tipousuario: resultado[0].tipousuario,
          codeuser: resultado[0].codeuser
        },
        process.env.TOKEN_SECRET
      );
      res.json({ success: true, token: token });
    });
};
