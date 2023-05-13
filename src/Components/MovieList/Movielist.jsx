import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Moviecard from '../MovieCard/Moviecard'
import { globalData } from '../../App';



const Movielist = ({allMovies}) => {

  console.log("allMovies from movielist",allMovies);

    const {category} = useParams()

    const context = useContext(globalData)
    console.log("context from movielist",context);

     

  return (
    <>
    <div className="movielist">
      <h2> {category && category} </h2>
      <div className="movie_list">
        <Moviecard
          allMovies={
            category === "popular"
              ? context.popularMoviesFromApi
              : category === "top_rated"
              ? context.topRatedMoviesFromApi
              : category === "upcoming"
              ? context.upcomingMoviesFromApi
              : context.state.length !== 0 ? [...context.state] : [...context.popularMoviesFromApi, ...context.topRatedMoviesFromApi, ...context.upcomingMoviesFromApi]
          }
        />
      </div>
    </div>
  </>

  )
}

export default Movielist