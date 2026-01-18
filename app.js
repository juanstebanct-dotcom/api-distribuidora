const express = require("express");
const app = express();

app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));

app.get("/", (req, res) => {
    res.send("API Distribuidora activa");
});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});