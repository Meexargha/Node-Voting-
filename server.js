const express = require("express");
const app = express();
const db = require("./db/db");
require('dotenv').config();

const bodyparser = require('body-parser');
app.use(bodyparser.json());
const PORT = process.env.PORT || 3000;

//const {jwtAuthMiddleware} = require("./jwt");

//IMPORT ROUTERS HERE FROM ROUTES 
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candiateRoutes");
//use the routes 
app.use( '/user',userRoutes);
app.use('/candidate',candidateRoutes);
app.listen(PORT, () => {
  console.log(`Listen on port 3000`);
}); 