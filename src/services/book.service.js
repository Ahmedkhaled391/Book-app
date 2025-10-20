import axios from "axios";
import { useParams } from "react-router";
const url = "http://localhost:3000/books"

 export async function getBooks(){
     return await axios.get(url)
}

 export async function storeBook(book){
      return await axios.post(url,book)
 }


 
 export async function getBooks(id){
       return await axios.get('${url}/${id}')
}
