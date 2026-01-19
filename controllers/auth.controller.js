const db = require('../config/db');

exports.login = (req, res) => {
  const { correo, password } = req.body;

  const sql = `
    SELECT id_usuario, nombre, correo
    FROM usuario
    WHERE correo = ? AND password = ?
  `;

  db.query(sql, [correo, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ mensaje: "Error servidor" });
    }

    if (result.length > 0) {
      res.json({
        mensaje: "Autenticación satisfactoria",
        usuario: result[0]
      });
    } else {
      res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }
  });
};