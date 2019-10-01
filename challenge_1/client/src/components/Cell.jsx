
import React from 'react'


const Cell = (props) => {
  console.log(props)
  const setTarge = () =>{
    console.log(props)
    //this.handleChange();
  }

    return(
        <button onClick={props.setTarget} >{props.value}</button>
    )


}
export default Cell;
