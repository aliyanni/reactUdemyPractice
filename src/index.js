import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81S+-1xB4WL._AC_UL210_SR195,210_.jpg"
    alt=""
  />
);

const Title = () => <h1>From Crook to Cook</h1>;

const Author = () => <h4>Snoop Dogg</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
