import React from 'react'
import { useParams } from 'react-router-dom';
const NamedCompoenet = () => {
    const {name }= useParams()
  return (
    <div>
      <h1>This is a {name}</h1>
    </div>
  )
}

export default NamedCompoenet
