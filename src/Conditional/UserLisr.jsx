import React from 'react'
import User from './User'
import { people } from './data'

const UserList = () => {
  return (
    <div className='mt-10'>

{
    people.map((data)=>{
        return(
        <User key={data.id} image={data.images} name={data.name} nickName={data} />
        )
    })
}
    </div>
  )
}

export default UserList
