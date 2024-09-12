import React from 'react'
import { useState } from 'react'
import AddMovie from './components/AddMovie'
import Filter from './components/Filter'
import MovieList from './components/MovieList'
import { FaPlus } from "react-icons/fa"
  
 


const App = () => {

  const [movies, setMovies ] = useState([])
  const [ addMovie, setAddMovie] = useState(false)
  const [showBtn, setShowBtn ] = useState(true)
  const [showFilter, setShowFilter ] = useState(true)
   

  return (
    <div > 
      {showFilter && <Filter movies={movies} setMovies={setMovies}/>}
      { showBtn && <button className='add_movie' onClick={()=> setAddMovie(!addMovie)}> <span>Add Movie</span> <FaPlus/></button> }
      {   addMovie 
        ? 
          <AddMovie 
            movies={movies} 
            setMovies={setMovies}
            setAddMovie={setAddMovie}
            setShowBtn={setShowBtn} 
            setShowFilter={setShowFilter}/> 
        :
           <MovieList movies={movies}/> }
    </div>
  )
}

export default App

 