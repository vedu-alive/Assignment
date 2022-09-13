import React, { useEffect, useState } from "react";
import Shows from "./Shows";
import "../Css/Body.css";
import axios from "axios";

function Body() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const req = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    setMovies(req.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="body">
      {movies.map((movie) => (
        <Shows
          key={movie.score}
          id={movie}
          imgUrl={movie.show.image.original}
          name={movie.show.name}
          language={movie.show.language}
          genres={movie.show.genres}
          days={movie.show.schedule.days}
          time={movie.show.schedule.time}
          rating={movie.show.rating.average}
        />
      ))}
    </div>
  );
}

export default Body;
