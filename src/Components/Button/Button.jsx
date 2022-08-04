import React from 'react'

function Button(props) {
    const {handleUpdate,count,name,price,disable=false}=props;
  return (
    <div className='adddecbtn'>
        <div  onClick={()=>{!disable&&handleUpdate(name,"del",price)}}>-</div>
        <div style={{color:"rgb(69, 208, 57)"}}>{count}</div>
        <div  onClick={()=>handleUpdate(name,"add",price)}>+</div>
    </div>
  )
}

export default Button