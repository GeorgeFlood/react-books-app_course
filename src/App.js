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
  console.log(books);

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={CreateBook} />
    </div>
  );
}

export default App;
