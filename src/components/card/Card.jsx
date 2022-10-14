import './Card.css'

import React from 'react'
import Item from '../ıtem/Item'
import data from '../../helper/data'

const Card = () => {
  return (
    <div className='cards-area-container' >
        <div className="bars"></div>
        <h1 className="language-title">Languages</h1>
        <div className="cards-container">
            {data.map((item)=>{
                return <Item Card={item} />
                
            })}
        </div>

    </div>
  )
}

export default Card