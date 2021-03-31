const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pcparts', {useNewUrlParser: true, useUnifiedTopology: true } );

mongoose.connection.on('open',(err)=>{
  if(err){
    console.log(err)
  }else{
    console.log('DB Connected');
  }
});