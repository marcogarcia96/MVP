const DB = require('/home/marco_ga/MVP/ConnectionBD.js')
const express = require('express');
const axios = require('axios')

module.exports ={
  getcpus: (req,res) =>{
    console.log(DB)
    DB.collection('cpus').find({}).toArray(function(err, result) {
      if (err) {console.log(err)}else {
        res.send(result);
      }

    });


  }







}