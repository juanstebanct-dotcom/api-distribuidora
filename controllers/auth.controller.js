const usuarios = [];

exports.register = (req, res) => {
    const { usuario, password } = req.body;

    const existe = usuarios.find(u => u.usuario === usuario);
    if (existe) {
        return res.status(400).json({ mensaje: "Usuario ya existe" });
    }

    usuarios.push({ usuario, password });

    res.json({
        mensaje: "Usuario registrado correctamente",
        usuario
    });
};

exports.login = (req, res) => {
    const { usuario, password } = req.body;

    const encontrado = usuarios.find(
        u => u.usuario === usuario && u.password === password
    );

    if (!encontrado) {
        return res.status(401).json({ mensaje: "Error en la autenticación" });
    }

    res.json({ mensaje: "Autenticación satisfactoria" });
};

// 👇 ESTO ES CLAVE
exports.usuarios = usuarios;
