import React from 'react'
import { FiEdit, FiTrash2, } from "react-icons/fi";
const View = ({ books, deleteBook, updateBook, search }) => {
    console.log("books", books)
    const filteredBooks = books.filter(
        (book) =>
            book.firstname.toLowerCase().includes(search.toLowerCase()) ||
            book.lastname.toLowerCase().includes(search.toLowerCase()) ||
            book.email.toLowerCase().includes(search.toLowerCase())
    )
    return filteredBooks.map((book) => (
        <tr key={book.firstname}>
            <td>{book.firstname}</td>
            <td>{book.lastname}</td>
            <td>{book.email}</td>
            <td className="update-btn" onClick={() => updateBook(book.firstname)}>
                <FiEdit />
            </td>
            <td className="delete-btn" onClick={() => deleteBook(book.firstname)}>
                <FiTrash2 />
            </td>
        </tr>
    ));
};

export default View;