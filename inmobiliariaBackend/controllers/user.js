const knex = require("../config/knexfile");

exports.listUser = (req, res) => {
    knex("users").then((resultado)=>{
        res.json(resultado)
    });
    .catch{(error) => {
        res.status(400).json({error: error.message})
    }
    }
};


exports.newUser()