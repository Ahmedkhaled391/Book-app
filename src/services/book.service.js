import axios from "axios";

const url = "http://localhost:3000/books";


export async function getBooks() {
  return await axios.get(url).then(data=>data.data)
}


export async function storeBook(book) {
  const res = await axios.post(url, book);
  return res.data;
}


export async function getBook(id) {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
}

export async function editBook(id,book){
  const res = await axios.put(`${url}/${id}`,book);
}



