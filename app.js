const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "",
  database: "",
  host: "localhost",
  password: "",
  connectionLimit: 10,
});
