import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = function (id) {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const CreateBook = function (title) {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];

    return setBooks(updatedBooks);
  };

  const changeTitle = function (id, title) {
    const newTitle = books.map((book) => {
      if (id === book.id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(newTitle);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={changeTitle} />
      <BookCreate onCreate={CreateBook} />
    </div>
  );
}

export default App;
