import React, { useState } from 'react'

function Card(props) {
  const [name] = useState(props.name);

  const [image] = useState(props.image);

  return (
      <img src={image} alt={name} className='card' onClick={props.handleClick}></img>
  )
}

export default Card
