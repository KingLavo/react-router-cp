import React from 'react'

const Trailer = ({movie}) => {
  return (
    <div>
        <video className="video" controls >
            <source  src={`${movie.trailer}`}  type="video/mp4"/>
        </video>
    </div>
  )
}

export default Trailer
