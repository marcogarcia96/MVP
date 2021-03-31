const fs = require('fs');
const readline = require('readline');

const AM4 = readline.createInterface({
  input: fs.createReadStream('./data/AMD.csv'),

});
const LGA1551 = readline.createInterface({
  input: fs.createReadStream('./data/Intels.csv'),


});
const MOB = readline.createInterface({
  input: fs.createReadStream('./data/MOB.csv')


});

const GPUs = readline.createInterface({
  input: fs.createReadStream('./data/GPU.csv')

});
const PSUs = readline.createInterface({
  input: fs.createReadStream('./data/PSU.csv')

});

var count = 0;

// PSUs.on('line', (line)=>{
//   array = line.split('\t')
//   for(var i = 0; i < array.length; i++){
//     if(i !== 4){
//       array[i] = '"' + array[i]  + '"'
//     }
//   }
//   str = array.join();
//   fs.appendFile('./data/CLEANPSU.csv',count++ + ',' + str + '\n',(err)=>{
//         if(err){
//           console.log(err)
//          }
//        })
// })

AM4.on('line', (line)=>{
  array = line.split('\t')
  array.splice(1,2)
  str = array.join()
  fs.appendFile('./data/CLEANCPU.csv', str+ ',AM4' + '\n',(err)=>{
    if(err){
      console.log(err)
    }
  })
})

LGA1551.on('line', (line)=>{
  array = line.split('\t')
  array.splice(1,2)
  if(array[4] === ' '){
    array[4] = null
  }
  str = array.join()
  fs.appendFile('./data/CLEANCPU.csv', str + ',1551'  + '\n',(err)=>{
    if(err){
      console.log(err)
    }
  })

})

// MOB.on('line', (line)=>{
//   array = line.split(',');
//   str = array.join();
// fs.appendFile('./data/CLEANMOB.csv', count++ +','+str + '\n', (err)=>{
//   if(err){
//     console.log(err)
//   }
// })
// })

// GPUs.on('line', (line)=>{
//   array = line.split(/[\t]/)
//   array.splice(1,2)
//   array.splice(5,1)
//   for(var i = 0; i <  array.length; i++){
//     if( i !== 5){
//       array[i] = '"' + array[i] + '"';
//     }
//   }
//   str = array.join();

//   fs.appendFile('./data/CLEANGPU.csv', count++ +','+ str + '\n',(err)=>{
//        if(err){
//          console.log(err)
//        }
//      } )
// })