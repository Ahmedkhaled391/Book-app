import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../services/book.service";

function Details() {
     const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        getBook(id).then(data => setBook(data));

        
    },[id]);
    return ( <>
           <header>
        <h1>Book Details</h1>
           </header>
              <section className="container my-4  shadow">
                <div className="card-header">
                    <h4>{book.title}</h4>
                </div>
                <div className="alert alert-secondary my-2">
                    <strong>Price: </strong> {book.price}
                </div>
                <div className="alert alert-secondary my-2">
                    <strong>Author: </strong> {book.author}
                </div>
                <div className="alert alert-secondary my-2">
                    <strong>Description: </strong> {book.desc}

                </div>
              </section>

     

    
    </> );
}

export default Details;

 

