import React from 'react'

const Note = ({title, desc, handleRemove}) => {
  return (
    <div >
      <h1>Title : {title}</h1>
      <p>Desc : {desc}</p>
      <button onClick={handleRemove()}>Remove</button>
    </div>
  )
}

export default Note
