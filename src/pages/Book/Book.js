import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {
    console.log(props.book);
    const { name, picture, info, _id } = props.book;

    return (
      <>
        <div className="book-container">
          <div className="booking-main">
            <div>
              <img className="book-img" src={picture} alt="" />
            </div>
            <div>
              <h3>{name}</h3>
              <small>{info}</small>
            </div>
          </div>
          <Link to={`/books/process/${_id}`}>
            <button type="button" className="btn btn-primary">
              Book Now
            </button>
          </Link>
        </div>
      </>
    );
};

export default Book;