import React from "react";
import BookItem from "./BookItem";
import PropTypes from "prop-types";

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <BookItem key={book.id} book={book} />
    ))}
  </ul>
);

BookList.propType = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // name: PropTypes.string
    })
  ),
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
