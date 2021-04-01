import React from 'react';



class PSU extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }


}
render(){
  console.log('props', this.props)
  return(
    <div className="PSU">

      <img src='https://lh3.googleusercontent.com/proxy/3RdMGN1Mt3ePWT37Zj_F--U0-jGQgo9fL-iVsoIX4r5mchkVetpJ5cTaePQYBiauJ7OpUP0ZxkkyNcYLvcrYMg8dYbXCLqY6zIiT0I7U1p3YOjB99-whWhSkkE0LKW4Dn7QCnxQU94wfPUr0VnVG' className='psuimg'/>

    </div>
  )
}
}

export default PSU;