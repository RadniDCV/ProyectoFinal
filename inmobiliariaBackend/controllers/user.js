const knex = require("../config/knexfile");

exports.listUser = (req, res) => {
    knex("users").then((resultado)=>{
        res.json(resultado)
    });
};


exports.newUser()