import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import FakeApiCard from './FakeApiCard'
const  url ="https://jsonplaceholder.typicode.com/posts"
const FakeApiList = () => {

    const[cards,setCards]= useState([])
    useEffect(()=>{
axios.get(url).then((res)=>setCards(res.data))
    },[])
  return (
    <div className='flex flex-wrap'>
      { 
      cards.map((card)=><FakeApiCard key
      ={card.id} title ={card.title} description ={card.body} />)}
    </div>
  )
}

export default FakeApiList
