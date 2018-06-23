/*
Author: Emad Bin Abid
Created On: Saturday, June 23' 2018
*/

/*Application dependencies */
const server = require('./server');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

/*Middlewares */
app.use(express.json());
app.use(cors());

/*Http calls */


/*Running the server */
server.run(app, 3000);