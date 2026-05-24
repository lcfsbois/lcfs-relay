SERVER.JS

const express = require('express');
const Gun = require('gun');
require('gun-mongo-keyvalue'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log(`Relay Gun con MongoDB corriendo en el puerto ${port}`);
});

const gun = Gun({ 
  web: server,
  mongo: {
    // Esto buscará una variable secreta en Render para no dejar tu clave a la vista de todos
    connectionString: process.env.MONGO_URI,
    collection: 'confesiones'
  }
});