import { useEffect, useState } from 'react'
import { getBooks } from '../services/book.service'
import { Link } from "react-router-dom";


function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(data => setBooks(data));
    },[]);
    
    
   

    return (
        <>
        <header className="bg-light shadow text-center py-4  ">
            <h1>Welcome to the Book App</h1>
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
                    books.map((book) => (
                        <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.price}</td>
                        <td>{book.author}</td>
                        <td>{book.description}</td>
                        <td>
                            <Link className="btn btn-sm btn-info mx-1" to={'/details/${book.id}'}>Details</Link>
                            <Link className="tn btn-sm btn-info mx-1" >Edit</Link>
                            <button className="tn btn-sm btn-info mx-1">Delete</button>
                        </td>
                        </tr>
                    ))
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