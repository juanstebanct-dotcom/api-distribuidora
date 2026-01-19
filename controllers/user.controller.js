const db = require('../config/db');

exports.listarUsuarios = (req, res) => {
  const sql = `
    SELECT id_usuario, nombre, apellido, correo
    FROM usuario
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ mensaje: "Error servidor" });
    }

    res.json({
      mensaje: "Listado de usuarios",
      usuarios: result
    });
  });
};