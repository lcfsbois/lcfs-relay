const express = require('express');
const cors = require('cors');
const Gun = require('gun');
require('gun-mongo-keyvalue'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
 origin: '*',
 credentials: true,
})); 

app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

const gun = Gun({ 
  web: server,
  mongo: {
    // Esto buscará una variable secreta en Render para no dejar tu clave a la vista de todos
    connectionString: process.env.MONGO_URI,
    collection: 'confesiones'
  }
});