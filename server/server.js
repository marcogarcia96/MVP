const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const data = require('/home/marco_ga/MVP/server/controller/controllers.js')

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
app.get('/cpus', data.getcpus);
