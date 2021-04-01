import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import CPU from '/home/marco_ga/MVP/client/src/component/CPU.jsx'


class App extends React.Component{
  constructor(){
  super();
  this.state = {
    cpu:{},
    gpu:{},
    psu:{},
    ram:{},
    mob:{},
   case:{}
  }
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
     </div>
     <div className='pagers'>
     <button className = 'CPUBTN' >Processors</button>
     <button className = 'GPUBTN' >Graphic Cards</button>
     <button className = 'MOBBTN' >Mother Boards</button>
     <button className = 'HMEBTN' >Home</button>
     <button className = 'PSUBTN' >Power Supply</button>
     <button className = 'RAMBTN' >RAM</button>
     <button className = 'CASEBTN' >PC Cases</button>
     </div>
     <div className="footer">

  </div>
     </div>
   )

  }

}
 export default App;