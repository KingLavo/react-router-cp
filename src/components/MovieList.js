import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => { 
  console.log(movies)
  return (
    <div className="movieList">
      {
        movies.length > 0 ? movies.map((movie, index)=>(
          <MovieCard key={index} movie={movie}/>
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
