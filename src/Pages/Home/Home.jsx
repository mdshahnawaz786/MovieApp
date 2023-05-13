import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './home.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { globalData } from '../../App';
import Movielist from '../../Components/MovieList/Movielist';


const Home = () => {

    const context = useContext(globalData);
  const [allMovies, setAllMovies] = useState(context);
  console.log(allMovies);
  useEffect(() => {
    setAllMovies([
      ...context.popularMoviesFromApi,
      ...context.topRatedMoviesFromApi,
      ...context.upcomingMoviesFromApi,
    ]);
  }, [context]);

  return (
    <>
      <div className="home">
        <div className="poster">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            transitionTime={3}
            showStatus={false}
          >
            {context.popularMoviesFromApi.map((ele) => {
              return (
                <>
                  <Link to={`/movie/${ele.id}`}>
                    <div className="posterImage">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${
                          ele && ele.backdrop_path
                        }`}
                        alt=""
                      />
                    </div>
                    <div className="posterImage_overlay">
                      <div className="posterImage_title">
                        {ele && ele.original_title}
                      </div>
                      <div className="posterImage_releasingDate_rating">
                        {ele && ele.release_date}
                        <span>{ele && ele.vote_average}</span>
                      </div>
                      <div className="posterImageDescription">
                        {ele && ele.overview}
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </Carousel>
          <Movielist />
        </div>
      </div>
    </>
  )
}

export default Home