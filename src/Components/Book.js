import React, { useState } from "react";
import "../Css/Book.css";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

const Book = ({ show, title, time, day, imgUrl, cancle }) => {
  const [bookings, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const bookTicket = (e) => {
    e.preventDefault();
    cancle();
    dispatch({
      type: "BOOK",
      book: {
        name: name,
        email: email,
        movie: title,
      },
    });

    navigate("/");
  };
  return (
    <div className={`book ${show && "show"}`}>
      <img src={imgUrl} alt="movie" className="book_img" />
      <form className="book_tickets">
        <div className="book_row">
          <label className="book_label"> Name : </label>
          <input
            type={"text"}
            className="book_input"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div className="book_row">
          <label className="book_label"> E-mail : </label>
          <input
            type={"email"}
            className="book_input"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="book_row">
          <label className="book_label"> Movie : </label>
          <input
            type={"text"}
            className="book_input movie_name"
            value={title}
            readOnly
          ></input>
        </div>

        <div className="book_row">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="book_col">
              <label className="book_label"> Day : </label>
              <input
                type={"text"}
                className="book_input"
                value={day}
                readOnly
              ></input>
            </div>

            <div className="book_col">
              <label className="book_label"> Time : </label>
              <input
                type={"text"}
                className="book_input"
                value={time}
                readOnly
              ></input>
            </div>
          </div>
        </div>
        <div className="book_buttons">
          <button className="book_btn" onClick={bookTicket}>
            Book
          </button>
          <button
            className="book_btn"
            onClick={(e) => {
              e.preventDefault();
              cancle();
            }}
          >
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book;
