import React from "react";
import { createRoot } from "react-dom/client";
import { books } from "./Books";
import Book from "./Book";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

root.render(<BookList />);
