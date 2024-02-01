const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors())

const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a route
app.get('/', (req, res) => {
  return res.json({
    "name":"Unep Environmental news Api"
  });
});

// bring testimonial routes
const techRoutes = require('./routes/routes')//('../routes/product.routes');

// using as middleware
app.use('/escrapper/api', techRoutes)


// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

