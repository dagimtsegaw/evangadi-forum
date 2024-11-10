const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "dagi",
  database: "evangadi_forum_db",
  host: "localhost",
  password: "123456",
  connectionLimit: 10,
});
dbConnection.execute("select 'test'", (err, res) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(res);
  }
});
