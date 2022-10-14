import { useState } from 'react';
import React from 'react'
import './Item.css'

const Item = (props) => {
const {Card}=props   
const [logo, setLogo] = useState(true)   
const{name,img,options}=Card
    console.log(Card);

//  const prewClick=()=>{
    // setLogo(!logo)
//  }   

  return (
    <div className="card" onClick={()=>  setLogo(!logo) } >
        {logo ?(
                     <div  >
     <img  className='card-logo' src={img} alt="" />
     <h3 className='card-title' > {name} </h3>
  </div>

        ) :(
            <ul className="list">
                {options.map((a,index) => {
                    return ( <li key={index} > {a} </li> )
                }  )}
            </ul>
        ) }
  
  
  
  

    </div>
 
 
 
 
  )
}

export default Item