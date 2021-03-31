const mongoose = require('mongoose');
const fs = require('fs');
const readline = require('readline');


const CpuSchema = mongoose.Schema({ Model: String, Cores: Number, Threads: Number, Frequency: Number, Turbo: Number, L2cache: Number, L3cache: Number, Watt:Number, SocketType: String });

const GpuSchema = mongoose.Schema({Model: String, Buslane: String, Memory: String, GPUclock: String, MemoryClock: String, Watt: Number, Picture:String })

const MobSchema = mongoose.Schema({Model: String, SocketType: String, FormFactor: String, Chipset: String, RAMSLOTS: Number, RAMTYPE: String, RAMSPEED: Number, SATAPORTS: Number, images: String})

const PCCaseSchema = mongoose.Schema({
  Model: String, FormFactor: String, Dimension: String, MOBSup: String, image: String
})

const PSUSchema = mongoose.Schema({
  Model:String, Series: String , Manufacturer: String, Rating: String, Power:Number, images: String
})

const  RAMSchema = mongoose.Schema({
  Model: String, Capacity: Number, DDRType:String, DataRate: Number, Timings: String, Volts: String, images: String
})

const RAMRead =  readline.createInterface({
  input: fs.createReadStream('./data/CLEANRAM.csv'),
});

const PSURead = readline.createInterface({
  input: fs.createReadStream('./data/CLEANPSU.csv'),
});

const CASERead = readline.createInterface({
  input: fs.createReadStream('./data/CLEANPCCASE.csv'),
});
const MOBRead = readline.createInterface({
  input: fs.createReadStream('./data/CLEANMOB.csv'),
});

const CPURead = readline.createInterface({
  input: fs.createReadStream('./data/CLEANCPU.csv'),
});

const GPURead = readline.createInterface({
  input: fs.createReadStream('./data/CLEANGPU.csv'),
});


var MOB = mongoose.model('MOB', MobSchema)
var CPU = mongoose.model('CPU',CpuSchema)
var GPU = mongoose.model('GPU',GpuSchema)
var PCC = mongoose.model('CASE', PCCaseSchema)
var PSU = mongoose.model('PSU', PSUSchema)
var RAM = mongoose.model('RAM', RAMSchema)

const uploadRAM = RAMRead.on('line',(line)=>{
  array = line.split(',')
  var proc = new RAM({
    Model: array[0], Capacity: array[1], DDRType:array[2], DataRate: array[3], Timings: array[4], Volts: array[5], images: array[6]
  })
  proc.save((err,data)=>{
            if(err){
        console.log(err)
      }else {
    console.log(data, 'saved to collection')
          }
      });

})

// const uploadPSU = PSURead.on('line',(line)=>{
//   array = line.split(',')
//   var proc = new PSU({
//     Model:array[0], Series: array[1] , Manufacturer: array[2], Rating: array[3], Power:array[4], images: array[5]
//   })
//   proc.save((err,data)=>{
//                    if(err){
//                     console.log(err)
//                    }else {
//                      console.log(data, 'saved to collection')
//                    }
//                  });
// })

// const uploadCASE = CASERead.on('line',(line)=>{
//   array = line.split(',')
//   var proc = new PCC({Model: array[0], FormFactor: array[1], Dimension: array[2], MOBSup: array[3], image: array[4]})
//   proc.save((err,data)=>{
//               if(err){
//                console.log(err)
//               }else {
//                 console.log(data, 'saved to collection')
//               }
//             });

// })





// const uploadMOB = MOBRead.on('line', (line)=>{
//   array = line.split(',');
//   var proc = new MOB({Model: array[0], SocketType: array[1], FormFactor: array[2], Chipset: array[3], RAMSLOTS: array[4], RAMTYPE: array[5], RAMSPEED: array[6], SATAPORTS: array[7], images: array[8]})
//   proc.save((err,data)=>{
//          if(err){
//           console.log(err)
//          }else {
//            console.log(data, 'saved to collection')
//          }
//        });
// })



// const uploadCPU = CPURead.on('line', (line)=>{
//   array = line.split(",");
//   var proc = new CPU({ Model: array[0], Cores: array[1], Threads: array[2], Frequency: array[3], Turbo: array[4], L2cache: array[5], L3cache: array[6], Watt: array[7], SocketType: array[8] })
//   proc.save((err,data)=>{
//     if(err){
//       console.log(err)
//     }else {
//       console.log(data, 'saved to collection')
//     }
//   });
// })

// const uploadGPU =  GPURead.on('line',(line)=>{
//   array = line.split(',');
//   var proc = new GPU({ Model: array[0], Buslane: array[1], Memory: array[2], GPUclock: array[3], MemoryClock: array[4], Watt: array[5], Picture:array[6] })
//   proc.save((err,data)=>{
//     if(err){
//       console.log(err)
//     }else {
//       console.log(data, 'saved to gpu collection')
//     }
// })

// })

module.exports = uploadRAM;