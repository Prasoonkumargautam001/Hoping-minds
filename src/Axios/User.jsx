import React from 'react'

const User = (props) => {
    const {image ,name,} = props
  return (
    <div className='flex flex-col items-center justify-center m-4'>
        <img className='w-[100px] h-[100px] rounded-full overflow-hidden' src={image} alt="" />
        <h2 className='text-xl'>{name}</h2>
      
    </div>
  )
}

export default User
