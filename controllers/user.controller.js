exports.listarUsuarios = (req, res) => {
    res.json({
        mensaje: "Listado de usuarios",
        usuarios: [
            { usuario: "admin" },
            { usuario: "cliente1" }
        ]
    });
};