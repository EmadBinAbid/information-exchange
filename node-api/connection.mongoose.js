/*
Author: Emad Bin Abid
Created On: Saturday, June 23' 2018
*/

/*DB Connectivity */

//Dependencies
const mongoose = require('mongoose');

const dbName = "InformationExchangeApp";
const port = "27017";

//Connecting to MongoDB
mongoose.connect(`mongodb://localhost/${dbName}`, (err) => 
{
    if(err)
    {
        console.log(`Error in MongoDB connection: ${dbName}, PORT: ${port}`);
    }
    else
    {
        console.log(`Connected to MongoDB: ${dbName}, PORT: ${port}`);
    }
});