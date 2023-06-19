const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
const port = process.env.PORT;

require("./configs/mongoose.config");

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./routes/authors.routes')(app);

app.listen(port, () => console.log(`Welcome! Listening on port: ${port}`));