import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { editBook, getBook } from "../services/book.service";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    id: id,
    price: "",
    author: "",
    desc: "",
  });
  const [originalBook, setOriginalBook] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    getBook(id).then((data) => {
      setBook(data);
      setOriginalBook(data);
    });
  }, [id]);

  const updateBook = async () => {
    const { title, price, author, desc } = book;

    
    if (!title || !price || !author || !desc) {
      Swal.fire({
        title: "Error!",
        text: "Please fill all the fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    
    if (
      originalBook &&
      title === originalBook.title &&
      price === originalBook.price &&
      author === originalBook.author &&
      desc === originalBook.desc
    ) {
      Swal.fire({
        title: "No Changes Detected",
        text: "You didn't modify any field.",
        icon: "info",
        confirmButtonText: "OK",
      });
      return;
    }

    
    await editBook(id, book);

    Swal.fire({
      title: "Success!",
      text: "Book has been edited successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <header className="text-light bg-dark text-center py-3 mx-auto fs-1 shadow">
        Edit Book
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

        <div className="text-start">
          <button
            className="btn btn-success text-light p-2 my-5"
            onClick={updateBook}
          >
            Edit Book
          </button>
        </div>
      </section>
    </>
  );
}

export default Edit;
