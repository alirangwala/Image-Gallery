const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
const {readImages, tagImage} = require('./queries')

app.use(express.static('../client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser
app.use(cors());

app.get('/images/', (req, res) => {
  readImages((err, data) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(data.rows)
    }
  })
});

app.put('/images/:image_id/tag', (req, res) => {
  tagImage((err, data) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.send(data)
    }
  }, req.params.image_id)
});

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});