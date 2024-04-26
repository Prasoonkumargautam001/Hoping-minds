import React from 'react'
import { Link } from 'react-router-dom'
const navMenu = [
    {
url:"/",
menu:"HOME"
},
{
    url:"/axios/post",
    menu:"POST"
    },
    {
        url:"/axios/2",
        menu:"Axios"
        },
        {
            url:"/axios",
            menu:"Axios 1"
            },
            {
                url:"/class",
                menu:"CLASS components"
                },
                {
                    url:"/conditional",
                    menu:"Conditional Rendering"
                    },
]
const Navbar = () => {

  return (
    <div className='flex  justify-around'>
       {
        navMenu.map((menu, i)=><Link key={i} className='text-lg text-black cursor-pointer uppercase m-4 ' to={menu.url} >{menu.menu}</Link>)
       }
      
    </div>
  )
}

export default Navbar
