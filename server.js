const express = require('express');
const Gun = require('gun');

const app = express();
const port = process.env.PORT || 3000;

app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log(`Relay Gun corriendo en el puerto ${port}`);
});

// Los chismes se guardan en la carpeta segura /data de Render
const gun = Gun({ 
  web: server,
  file: '/data/todo_el_chisme' 
});