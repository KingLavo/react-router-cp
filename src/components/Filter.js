import React, {useState} from 'react' 

const Filter = ({movies, setMovies}) => {
  const [filterVal, setFilterVal] = useState("")

  const handleSearch = ()=>{  
    const value = movies.filter(item => item.title === filterVal) 
    setMovies(value) 
  } 
  return (
    <div className="container filter-container">
      <form className="filter" autoComplete="off">
            <input 
              type="text" 
              placeholder="serach your movie" 
              value={filterVal}
              onChange={(e)=>setFilterVal(e.target.value)}
            />
      </form> 
      <button className='search' onClick={()=> handleSearch()} >search</button> 
    </div> 
  )
}

export default Filter
