import { useEffect , useState } from "react";
import { useParams } from "react-router";
import { getBooks } from "../services/book.service";

function Details() {
     const { id } = useParams();
    const [book, setBook] = useState([]);

    useEffect(() => {
        getBooks(id).then(data => setBook(data.data));
    },[]);
    return ( <>
    
     

    
    </> );
}

export default Details;

 

