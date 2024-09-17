import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPlus } from "react-icons/fa"

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='Home'>
      <h1>Welcome to the movie app</h1>
      <button className='add_movie' onClick={()=> navigate("/add-movie")}> <span>Add Movie</span> <FaPlus/></button> 
    </div>
  )
}

export default Home
