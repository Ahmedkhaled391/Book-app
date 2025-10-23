import { useEffect, useState } from 'react'
import { getBooks } from '../services/book.service'
import { Link } from "react-router-dom";
import { deleteBook } from '../services/book.service';
import Swal from 'sweetalert2';


function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(data => setBooks(data));
    },[]);
    
    const delBook=(id)=>{
                const confirmResult=Swal.fire({
                    title:"Are you sure?",
                    text:"You won't be able to revert this!",
                    icon:"warning",
                    showCancelButton:true,
                    confirmButtonColor:"#3085d6",
                    cancelButtonColor:"#d33",
                    confirmButtonText:"Yes, delete it!"
                }).then((result)=>{
                    if(result.isConfirmed){
                        deleteBook(id).then(()=>{
                            Swal.fire(
                                'Deleted!',
                                'Your book has been deleted.',
                                'success'
                            );
                            
                            setBooks(books.filter(book => book.id !== id));
                        });
                    }
                });      
        

    }
   

    return (
        <>
        <header className="bg-light shadow text-center py-4  ">
            <h1>Welcome to your Book App</h1>
        </header>

        <section className="my-5 container">
            <table className="table table-striped text-center">
                <thead className="bg-dark text-white">
                    <tr>
                        <th >ID</th>
                        <th >Title</th>
                        <th >Price</th>
                        <th >Author</th>
                        <th >Description</th>
                        <th >Actions</th>
                    </tr>

                 </thead> 
                 <tbody>
                  {
                    books.length ? (
                        books.map((book) => (
                        <tr key={book.id}>
                            <td className='align-middle'>{book.id}</td>
                            <td className='align-middle'>{book.title}</td>
                            <td className='align-middle'>{book.price}</td>
                            <td className='align-middle'>{book.author}</td>
                            <td className='align-middle'>{book.desc}</td>
                            <td >
                                <div className='d-flex flex-column flex-md-row gap-1 justify-content-center'>

                            <Link className="btn btn-sm btn-info mx-1" to={`/details/${book.id}`}>
                                Details
                            </Link>
                            <Link className="btn btn-sm btn-warning mx-1 "to={`/edit/${book.id}`}>
                                Edit
                            </Link>
                            <button className="btn btn-sm btn-danger mx-1" onClick={() => delBook(book.id)}>
                                Delete
                            </button>
                                </div>
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan="6" className="text-center">No books found</td>
                        </tr>
                    )
                    }

                    
                    </tbody>     
            </table>
            
        </section>
        </>
     );
}

export default Home;
<>
</>
