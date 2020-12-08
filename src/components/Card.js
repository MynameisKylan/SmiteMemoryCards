import React, { useState } from 'react'

function Card(props) {
  const [name, setName] = useState(props.name);

  const [image, setImage] = useState(props.image);

  return (
      <img src={image} alt={name} className='card'></img>
  )
}

export default Card
