'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify',false)
mongoose.connect('mongodb://localhost:27017/api_rest_form',{useNewUrlParser:true,useUnifiedTopology: true})
    .then(()=>{
        console.log("Correct connection to DB");

        // Crear servidor y escuchar peticiones
        app.listen(port, () => {
            console.log("Server running in http://localhost:"+port);
        });
});