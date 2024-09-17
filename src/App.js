import React from 'react'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import AddMovie from './components/AddMovie'
import Home from "./components/Home"
import MovieList from './components/MovieList'
import MovieDes from "./components/MovieDes"
 

const App = () => {

  const [movies, setMovies ] = useState([])
   
  return (
    <div > 
      <Routes> 
        <Route path="/" element={<Home/>} /> 
        <Route path="/movie-list" element={<MovieList movies={movies} setMovies={setMovies}/>}/>
        <Route path="/add-movie" element={ <AddMovie movies={movies} setMovies={setMovies}/> } />
        <Route path="/movie/:id" element={<MovieDes movies={movies}/>} />
      </Routes>      
    </div>
  )
}

export default App 

 