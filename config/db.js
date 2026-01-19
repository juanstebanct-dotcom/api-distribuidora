const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'distribuidora'
});

db.connect(err => {
  if (err) {
    console.log("Error conexión BD:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

module.exports = db;