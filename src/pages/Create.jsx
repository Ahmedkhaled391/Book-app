import { useState } from 'react';
import Swal from 'sweetalert2';
import { storeBook } from '../services/book.service';
import {useNavigate} from 'react-router-dom';

function Create() {
  const [book, setBook] = useState({
    title: '',
    price: '',
    author: '',
    desc: ''
  });
 const navigate = useNavigate();
  const addBook = () => {
    const { title, price, author, desc } = book;
    
    if (!title || !price || !author || !desc) {
        Swal.fire({
            title: 'Error!',
            text: 'Please fill all the fields.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }
    
    storeBook(book);
    Swal.fire({
        title: 'Success!',
        text: 'Book has been added successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
    
    
    setBook({ title: '', price: '', author: '', desc: '' });
    setTimeout(() => {
        navigate("/");
    }, 1500);
    
  };

  return (
    <>
      <header className="text-dark text-center py-5 mx-auto fs-1 shadow">
        Create a new book
      </header>
      <section className="mx-auto my-4">
        <form className="shadow" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3 text-start">
            <label className="fw-bold">Title</label>
            <input
              type="text"
              className="form-control border border-3 rounded p-1"
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
            <label className="fw-bold">Price</label>
            <input
              type="text"
              className="form-control border border-3 rounded p-1"
              value={book.price}
              onChange={(e) => setBook({ ...book, price: e.target.value })}
            />
          </div>
          <div className="mb-3 text-start">
            <label className="fw-bold">Author</label>
            <input
              type="text"
              className="form-control border border-3 rounded p-1"
              value={book.author}
              onChange={(e) => setBook({ ...book, author: e.target.value })}
            />
            <label className="fw-bold">Description</label>
            <textarea
              className="form-control border border-3 rounded p-1"
              rows={10}
              value={book.desc}
              onChange={(e) => setBook({ ...book, desc: e.target.value })}
            />
          </div>
        </form>
        <div className="text-center">
          <button
            className="bg-dark btn text-light p-2 my-5"
            onClick={addBook}
          >
            Add Book
          </button>
        </div>
      </section>
    </>
  );
}

export default Create;
