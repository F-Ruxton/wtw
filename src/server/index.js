var express = require('express');
var cloudinary = require('cloudinary');
var cors = require('cors');

var CloudinaryConfig = require('../config/cloudinary');

cloudinary.config(CloudinaryConfig);

const port = 3001;
const app  = express();

app.use(cors({
  origin: ['http://localhost:' + port],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.get(
  '/',
  (req, res) => res.send('Hello World!')
);

app.get(
  '/resources/images',
  (req, res) => {
    cloudinary.v2.api.resource(
      'sample',
      (error, result) => {
        console.log();
        console.log("result");
        console.log(result);
        console.log();
        res.json(result);
      },
    )
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
