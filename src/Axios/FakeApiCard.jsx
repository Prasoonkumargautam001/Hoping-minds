import React from 'react'

const FakeApiCard = (props) => {
    const {title, description}= props
  return (
    <div className='max-w-72 m-3 bg-slate-600  text-white p-4 rounded-lg'>

 <h1 className='text-xl font-semibold'>{title}</h1>
       <p>{description}</p>
      
      
    </div>
  )
}

export default FakeApiCard
