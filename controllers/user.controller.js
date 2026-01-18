const { usuarios } = require("./auth.controller");

exports.listarUsuarios = (req, res) => {
    res.json({
        mensaje: "Listado de usuarios",
        usuarios
    });
};