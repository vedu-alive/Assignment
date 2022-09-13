import React from "react";
import "../Css/Show.css";
import Values from "./Values";
import { NavLink, useNavigate } from "react-router-dom";

const Shows = ({ name, genres, language, imgUrl, days, time, rating, id }) => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  let navigate = useNavigate();
  const day = weekDays[new Date().getDay()];
  const currentTime = new Date().getHours();

  const handleClick = () => {
    navigate("/details", { state: { movie: id, Time: currentTime, day: day } });
    return id;
  };
  return (
    // <NavLink to={"/details"} className="link">
    <div className="show" onClick={handleClick}>
      <div className="show_posterContainer">
        <img className="show_poster" src={imgUrl} alt="poster" />
      </div>
      <div className="show_details">
        <div className="show_head">
          <h5 className="show_name">{name}</h5>
          <span className="show_rating">
            rating :{" "}
            {rating ? (
              <Values> {rating} </Values>
            ) : (
              <Values>{Math.floor(Math.random() * 10)} </Values>
            )}
          </span>{" "}
        </div>
        <table>
          <tr>
            <td>Languages :</td>
            <td className="show_values">
              <Values>{language}</Values>
            </td>
          </tr>
          <tr>
            <td>Gener :</td>
            <td className="show_values">
              {genres.map((item) => (
                <Values>{item}</Values>
              ))}
            </td>
          </tr>
          <tr>
            <td>Day :</td>
            <td className="show_values">
              {days.length === "0" ? (
                <Values>{days}</Values>
              ) : (
                <Values>{day}</Values>
              )}
            </td>
          </tr>
          <tr>
            <td>Time :</td>
            <td className="show_values">
              {time ? (
                <Values>{time}</Values>
              ) : (
                <Values>{currentTime}:00</Values>
              )}
            </td>
          </tr>
        </table>
      </div>
    </div>
    // </NavLink>
  );
};

export default Shows;
