import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ movies }) => {
  return (
    <>
      <div className="mainCardContainer">
        {movies ? (
          <>
            {movies.map((ele) => {
              return (
                <>
                  <Link to={`/moviedetails/${ele.id}`}>
                    <div className="card">
                      <img
                        className="cardImg"
                        src={
                          ele.poster_path !== null
                            ? `https://image.tmdb.org/t/p/original/${
                                ele && ele.poster_path
                              }`
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ERR0R_NO_IMAGE_FOUND.jpg/640px-ERR0R_NO_IMAGE_FOUND.jpg"
                        }
                        alt="image"
                      />
                      <div className="cardOverlay">
                        <div className="card_Title">
                          {ele && ele.original_title}
                        </div>
                        <div className="posterImageReleasingDateRating">
                          {ele && ele.release_date}
                          <span>
                            {ele && ele.vote_average}{" "}
                            <i className="imdbicon fa-brands fa-imdb"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </>
        ) : (
          <>Loading</>
        )}
      </div>
    </>
  );
};

export default Card;
