import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'
 const url= "https://api.github.com/users"
const UserList = () => {
  const [users, setUsers]= useState([])
  useEffect(()=>{
axios.get(url).then((res)=>setUsers(res.data))

  }, [])
  return (
    <div>
{      console.log(users)}
      {users.map((user)=> <User key ={user.id} image={user.avatar_url} name={user.login} />)}

      
    </div>
  )
}

export default UserList
