import React from 'react'
import { motion } from 'framer-motion'

// "https://i.ibb.co/ThPNnzM/blade-runner.jpg"
//https://image.tmdb.org/t/p/original/wAj64zEnaaDQwIlqNEcc0jEvcV4.jpg
//<img src="https://www.mensjournal.com/wp-content/uploads/2018/10/rambo-main-3.jpg?quality=86&strip=all" */>


const containerVarients={
  hidden:{
    y: "-50vh",
    opacity:0
  },
  visible:{
    y:0,
    opacity:1, 
    transition:{delay: 0.2, duration: 1.5, type:"spring", stiffness: 50 }
  },
  hover:{
    scale: 1.1, originY: 0,
    transition:{delay: 0.2, duration: 0.5 }
  }
}
const MovieCard = ({movie}) => { 
  return ( 
    <motion.div className="card-container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <img src={`${movie.posterUrl}`} alt="" className="poster" />
      <div className="movie_data">
        <h3>{movie.title}</h3>
        <span>Rate : {movie.rate}</span>
      </div>
    </motion.div>
  )
}

export default MovieCard
