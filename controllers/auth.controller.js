let usuarios = [];

exports.register = (req, res) => {
    const { usuario, password } = req.body;

    usuarios.push({ usuario, password });

    res.json({ mensaje: "Usuario registrado correctamente" });
};

exports.login = (req, res) => {
    const { usuario, password } = req.body;

    const user = usuarios.find(
        u => u.usuario === usuario && u.password === password
    );

    if (!user) {
        return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    res.json({ mensaje: "Autenticación satisfactoria" });
};
