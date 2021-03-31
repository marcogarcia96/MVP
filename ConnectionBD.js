const mongoose = require('mongoose')
const upload = require('./upload.js')

mongoose.connect('mongodb://localhost/pcparts', {useNewUrlParser: true, useUnifiedTopology: true } );

const DB = mongoose.connection.on('open',(err)=>{
  upload
  if(err){
    console.log(err)
  }else{
    console.log('DB Connected');
  }
});

module.exports = DB;