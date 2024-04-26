import React, { useState } from 'react'
import usersvg from "./user.svg"
import { Link } from 'react-router-dom'

const User = (props) => {
  const [userClicked, setUserClicked] = useState('')
    const { image ,name, } = props
  return (
    <div className=' flex flex-col items-center gap-3 '>
    <img className='w-[60px] h-[60px]' src={image?.[0]?.small?.url || usersvg} alt="" />
      <h2 className='text-2xl'>{name}</h2>
      <Link className=' p-3 rounded-full bg-black text-white mb-4'  to={`/${name}`}>Send Data</Link>
    </div>
  )
}

export default User
