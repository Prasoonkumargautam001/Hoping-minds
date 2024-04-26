import axios  from 'axios'
import React, { useEffect, useState } from 'react'

const PostData = () => {
    const [userData, setUserData] = useState( 
        {
            branch:"",
            Qualification:""
        }
    )
    const handelChange =(e)=>{
        setUserData({...userData, [e.target.name]: [e.target.value]})
    }

    const handelFormSubmit =(e)=>{
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users", finalUserData)
        .then((res)=>{
            console.log(res)
        })

    }
    const finalUserData =[
        {
            branch: userData.branch,
            Qualification:userData.Qualification
        }
    ]

   
  return (
    <div>
        <div>
            <h2 className='text-center text-3xl mt-2'>Axios Post Method</h2>
            <form onSubmit={handelFormSubmit} className='flex flex-col w-60 p-4'>
                <label htmlFor="branch">Branch </label>
                <input onChange={handelChange} className='border mb-2' placeholder="Branch "  type="text" id='branch' name='branch' value={userData.branch} />
                <label htmlFor="Qualification">Qualification</label>
                <input onChange={handelChange} className='border'  placeholder=" Qualification" type="text" id='Qualification' name='Qualification' value={userData.Qualification} />
                <button className='mt-2 bg-blue-400' type='submit'>Submit Data</button>
            </form>
            <h2>{userData.branch}</h2>
          
        </div>
      
    </div>
  )
}

export default PostData
