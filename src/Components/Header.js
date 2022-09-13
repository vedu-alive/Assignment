import React from "react";
import "../Css/Header.css";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const [bookings] = useStateValue();
  return (
    <div className="header">
      <h2 className="header_title">
        <span className="title_capital">T</span>he{" "}
        <span className="title_capital">S</span>how{" "}
        <span className="title_capital">B</span>ookie
      </h2>
      <img
        src="https://media.giphy.com/media/KPYvDoGB4C45mEzawv/giphy.gif"
        alt="movie icon"
        className="movie_icon"
      />
      <div className="header_booking" onClick={() => console.log(bookings)}>
        My Booking
      </div>
    </div>
  );
};

export default Header;
