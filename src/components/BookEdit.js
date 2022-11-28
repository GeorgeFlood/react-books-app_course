import { useState } from "react";

function BookEdit({ book, onEdit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
