import React, {useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";


const containerVarients={
    hidden:{
      y: "-50vh",
      opacity:0
    },
    visible:{
      y:0,
      opacity:1, 
      transition:{delay: 0.2, duration: 1.5, type:"spring", stiffness: 50 }
    }
  }


const AddMovie = ({movies, setMovies}) => {

    const navigate = useNavigate()
    const [title, setTitle ] = useState("") 
    const [description, setDescription ] = useState("")
    const [ posterUrl, setPosterUrl ] = useState("")
    const [ rate, setRate ] = useState("") 
    const [ trailer, setTrailer ] = useState("")

    const handleAddMovie = (e)=>{
        
        e.preventDefault()

        const movieData = {
            title,
            description,
            posterUrl,
            trailer,
            rate
        } 

        const newMovie = [...movies, movieData]
        setMovies(newMovie)
        
        setTrailer("")  
        setTitle("")
        setDescription("")
        setPosterUrl("")
        setRate("")

        navigate('/movie-list')
        
    }  

  return (
    <motion.div className='addMov_container'
        variants={containerVarients}
        initial="hidden"
        animate="visible"
     >
        <form onSubmit={handleAddMovie}>
            <div className="form_control">
                 <input type="text" placeholder='Movie Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="form_control">
                 <input type="text" placeholder='Movie description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="form_control">
                 <input type="text" placeholder='Movie posterURL' value={posterUrl} onChange={(e)=>setPosterUrl(e.target.value)}  />
            </div>
            <div className="form_control">
                 <input type="text" placeholder='Movie Trailer' value={trailer} onChange={(e)=>setTrailer(e.target.value)}  />
            </div>
            <div className="form_control">
                <select value={rate} onChange={(e)=>setRate(e.target.value)}>
                    <option value="">Rate Movie</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </div>  
            <button >Add Movie</button>          
        </form>      
    </motion.div>
  )
}

export default AddMovie
