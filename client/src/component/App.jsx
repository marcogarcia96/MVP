import React from 'react';
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import CPU from '/home/marco_ga/MVP/client/src/component/CPU.jsx';
import GPU from '/home/marco_ga/MVP/client/src/component/GPU.jsx';
import MOB from '/home/marco_ga/MVP/client/src/component/MOB.jsx'
import RAM from '/home/marco_ga/MVP/client/src/component/RAM.jsx'
import CASE from '/home/marco_ga/MVP/client/src/component/CASE.jsx'
import PSU from '/home/marco_ga/MVP/client/src/component/PSU.jsx'

class App extends React.Component{
  constructor(){
  super();
  this.state = {
    cpu:{},
    gpu:{},
    psu:{},
    ram:{},
    mob:{},
   case:{},
   CPUS:[]
  }
  this.Getcpus = this.Getcpus.bind(this);
}
  Getcpus= () => {

  }
  render(){
    return (
    <div>
    <div>
      <header className="head">
        <h1 id = 'tittle'>PC Builder</h1>
        <form className ='searchHeader'>
          <input className ='searchbar'></input>
          <button className='searchbtn'><i className="fas fa-search"></i></button>
          </form>
          </header>
    </div>
     <div className="pagebody">
      <CPU />
      <GPU />
      <MOB/>
      <RAM />
      <CASE />
      <PSU />
     </div>
     <div className='pagers'>
     <button className = 'CPUBTN' >Processors</button>
     <button className = 'GPUBTN' >Graphic Cards</button>
     <button className = 'MOBBTN' >Mother Boards</button>
     <button className = 'HMEBTN' >Home</button>
     <button className = 'RAMBTN' >RAM</button>
     <button className = 'CASEBTN' >PC Cases</button>
     <button className = 'PSUBTN' >Power Supply</button>
     </div>
     <div className="footer">

  </div>
     </div>
   )

  }

}
 export default App;