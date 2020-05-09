import React from 'react';

const Name=(props)=>{

   let val=props.age?props.age:"NA";
   
   if(props.children){
      return <div>Name: {props.children} | Age : {val}</div>
   }else{
     return <div>No Entry</div>
  }
}

export default Name;