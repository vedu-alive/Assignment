import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Css/Deatils.css";
import Book from "./Book";
const Details = () => {
  const { state } = useLocation();
  const { movie, day, Time } = state;
  const [show, setShow] = useState(false);

  const bookTicket = (movie) => {
    setShow((prevValue) => !prevValue);
  };

  return (
    <div style={{ backgroundColor: "#111" }}>
      {show && (
        <Book
          show={show}
          cancle={bookTicket}
          title={movie.show.name}
          time={movie.show.schedule.time ? movie.show.schedule.time : Time}
          day={movie.show.schedule.days ? movie.show.schedule.days : day}
          imgUrl={movie.show.image.medium}
        />
      )}
      <div
        className="details_header"
        style={{
          bsckground: "cover",
          backgroundImage: `url("${movie.show.image.original}")`,
        }}
      >
        <div className="fade_bottom"></div>
        <h1 className="details_name">{movie.show.name}</h1>
        <div className="details_summaryContainer">
          <p
            className="details_summary"
            dangerouslySetInnerHTML={{ __html: movie.show.summary }}
          ></p>

          <button className="btn" onClick={bookTicket}>
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
