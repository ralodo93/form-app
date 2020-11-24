'use strict'

var validator = require('validator');
var Form = require("../models/form");

var controller = {

    save:(req,res)=>{

        //Get params
        var params = req.body;
        var form = new Form();
    
        //Asign values
        form.gender = params.gender;
        form.age = params.age;
        form.address = params.address;
        form.postalCode = params.postalCode;
        form.job = params.job;
        form.symptons = params.symptons;
        form.diagnosis = params.diagnosis;
        form.smoke = params.smoke;
        form.test = params.test;
        form.date = params.date;
        form.where = params.where;
        form.infection = params.infection;

        //Save form
        form.save ((err,formStored) =>{
            if (err || !formStored){
                return res.status(404).send({
                    status:'error',
                    message:'Form is not saved'
                })
            }

            return res.status(200).send({
                status:'success',
                form:formStored
            });

        });
    }
}; //end controller

module.exports = controller;