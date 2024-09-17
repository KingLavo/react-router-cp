import React from 'react'
import { FaArrowLeft } from "react-icons/fa6"
import Trailer from "./Trailer"
import { useParams, useNavigate } from "react-router-dom"

const MovieDes = ({ movies }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const movie =   movies[id]  
    console.log(movie)   
  return (
    <div className='movie-desc'>
        <h1>Movie Description</h1>
        <div className="desc">
            <h3>{movie.description}</h3>
            <Trailer movie={movie}/>
            
        </div>
        <button className='desc-btn' onClick={()=> navigate("/")}><FaArrowLeft/> Home</button>
    </div>
  )
}

export default MovieDes
