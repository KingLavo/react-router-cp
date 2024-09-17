import React from 'react'
import MovieCard from './MovieCard'
import {Link} from "react-router-dom"
import Filter from './Filter'


const MovieList = ({movies, setMovies}) => {
  return (
    <div className="movieList">
      <Filter movies={movies} setMovies={setMovies}/>
      {
        movies.length > 0 ? movies.map((movie, index)=>(
          <Link to={`/movie/${index}`} key={index}>
              <MovieCard key={index} movie={movie}/>
          </Link>
        )):(
          <div className='no_movies'>
              <h1>No movies to display</h1>
          </div>
          )
      }
    </div>
  )
}

export default MovieList
