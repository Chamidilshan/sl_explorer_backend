const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const hotelsRouter = require("./src/v1/routes/hotels/hotels.router");
const roundTripsRouter = require("./src/v1/routes/roundTrips/roundTrips.router");
const dayTripsRouter=require("./src/v1/routes/dayTrips/dayTrips.router");
 
app.use(express.json());     

app.use("/api/v1/hotels", hotelsRouter); 
app.use("/api/v1/roundTrips", roundTripsRouter); 
app.use("/api/v1/dayTrips",dayTripsRouter);

const listener = app.listen(process.env.PORT || 5000, () => {
    console.log('App is listening on port ' + listener.address().port)
});


mongoose
    .connect("mongodb+srv://root:root@cluster0.tvve4wa.mongodb.net/?retryWrites=true") 
    .then(()=>{
        console.log('MongoDB connected');
    })
    .catch((err)=>{
        console.log(err); 
    });  

 



