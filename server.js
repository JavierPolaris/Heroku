require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require('cors');
const app = express();
require('./databases/mysql');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(express.static("client/build"));



const PORT = process.env.PORT || 5001;
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(require('./routes/router'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);

});

