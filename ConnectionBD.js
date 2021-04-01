const mongoose = require('mongoose')
// const upload = require('./upload.js')

mongoose.connect('mongodb://localhost/pcparts', {useNewUrlParser: true, useUnifiedTopology: true } );

const DB = mongoose.connection
DB.on('open',(err)=>{

  if(err){
    console.log(err)
  }else{
    console.log('DB Connected');
  }
})

module.exports = DB;