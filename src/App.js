import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const CreateBook = function (title) {
    return console.log("Add book", title);
  };

  return (
    <div>
      <BookCreate onCreate={CreateBook} />
    </div>
  );
}

export default App;
