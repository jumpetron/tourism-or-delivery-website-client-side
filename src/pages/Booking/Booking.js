import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Booking.css'

const Booking = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("https://obscure-bayou-41307.herokuapp.com/books")
          .then((res) => res.json())
          .then((data) => setBooks(data));
    }, [])
    return (
      <div className="main">
        <div className="my-5">
          <h6 className="text-danger text-center">JOURNEY</h6>
          <h1 className="text-center">Your Journey Starts Here</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="booking-container">
            {books.map((book) => (
              <Book key={book.id} book={book}></Book>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Booking;