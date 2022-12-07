import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81S+-1xB4WL._AC_UL210_SR195,210_.jpg",
    title: "From Crook to Cook",
    author: "Snoop Dogg",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL210_SR195,210_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51GvcIQqZAL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Smitten Kitchen Keepers",
    author: "Deb Perelman",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/51R8LCnHETL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Your Table Is Ready",
    author: "Michael Cecchi-Azzolina",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/411pTpK1xOL._SX383_BO1,204,203,200_.jpg",
    title: "Outlive",
    author: "Peter Attia MD",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/51V+-LZOBaL._SY344_BO1,204,203,200_.jpg",
    title: "The Silmarillion",
    author: "J. R. R. Tolkien",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
