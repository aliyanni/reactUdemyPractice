import React from "react";
import ReactDom from "react-dom";
import { books } from "./Books";
import Book from "./Book";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
