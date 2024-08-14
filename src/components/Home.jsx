import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import View from "./view";
import Dynamic from "./dynamic ";

const getDatafromLS = () => {
    const data = localStorage.getItem('books');
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}

const Table = () => {
    const navigate = useNavigate()
    const initialValues = { firstname: "", lastname: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues)
    const [FromErrors, setFromErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [data, setData] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [books, setBooks] = useState(getDatafromLS());
    const [search, setsearch] = useState('');

    const handleClick = () => {
        console.log(data?.current?.value, "initial value");
        const errors = {};
        if (!firstname) {
            errors.username = "Username is required";
        } if (!lastname) {
            errors.lastname = "Email is required";
        } if (!email) {
            errors.email = "email is required";
        } if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        } if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            localStorage.setItem("formErrors", JSON.stringify(errors));
            return;
        }
        else {
            localStorage.setItem("inputValue", firstname);
            localStorage.setItem("input", lastname);
            localStorage.setItem("Value", email);

            setFormValues(initialValues);
            setFormErrors({});
            setIsSubmit(true);
        }
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validateForm(formErrors)) {
    //         console.info('Your form is valid');
    //     } else {
    //         console.info('Your form is invalid');
    //     }
    // }


    console.log(localStorage.getItem("inputValue"), "****")
    const handleAddBooksubmit = (e) => {
        e.preventDefault();
        let book = {
            firstname,
            lastname,
            email
        }
        setBooks([...books, book]);
        setFirstname('');
        setLastname('');
        setEmail('');
        setFromErrors((formValues));
        setIsSubmit(true);
        const errors = {};
        if (!firstname) {
            errors.firstname = "firstname is required";
        }
        if (!lastname) {
            errors.lastname = "lastname is required";
        }
        if (!email) {
            errors.email = "email is required";
        }
        // If there are errors, set them in the state and return
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        } if (Object.keys(errors).length > 0) {
            setFormErrors(errors);

            // Save the errors in localStorage
            localStorage.setItem("formErrors", JSON.stringify(errors));

            return;
        }
        setFormValues(initialValues);
        setFormErrors({});
        setFirstname('');
        setLastname('');
        setEmail('');
        setIsSubmit(true);
    };

    // delete book form LS btn 
    const deleteBook = (firstname) => {
        const filteredBooks = books.filter((element, index) => {
            return element.firstname !== firstname
        })
        setBooks(filteredBooks);
    }

    // update book form Ls btn
    const updateBook = (firstname) => {
        const newFirstname = window.prompt("Enter updated first name:");
        const newLastname = window.prompt("Enter updated last name:");
        const newEmail = window.prompt("Enter updated email:");

        // Find the book by firstname and update it
        const updatedBooks = books.map(book => {
            if (book.firstname === firstname) {
                return {
                    ...book,
                    firstname: newFirstname,
                    lastname: newLastname,
                    email: newEmail,
                };
            } else {
                return book;
            }
        });

        setBooks(updatedBooks);
    };

    //table data search in 

    const handleSearch = (event) => {
        setsearch(event.target.value);
    }

    const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])

    return (

        <form className="container" onSubmit={handleAddBooksubmit}>
            <div className="card" >
                <div className="card-header">
                    <h2>Register</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>FirstName</label>
                        <input value={firstname} onChange={e => setFirstname(e.target.value)} className="form-control"
                            placeholder=" Enter the firstname" />
                        {isSubmit && formErrors.firstname && <div className="error">{formErrors.firstname}</div>}
                    </div>
                    <div className="form-group">
                        <label>LastName</label>
                        <input value={lastname} onChange={e => setLastname(e.target.value)} className="form-control"
                            placeholder="Enter the LastName" />
                        {isSubmit && formErrors.lastname && <div className="error">{formErrors.lastname}</div>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter the email" />
                        {isSubmit && formErrors.email && <div className="error">{formErrors.email}</div>}
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" onClick={handleClick} >
                        Register
                    </button>
                    <div className="veiw-container">
                        {books.length > 0 && (
                            <>
                                <label htmlFor="search">
                                    Search by Task:
                                    <input id="search" type="text" value={search} onChange={handleSearch} />
                                </label>
                                <div className="table-resposive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Firstname</th>
                                                <th>Lastname</th>
                                                <th>Email</th>
                                                <th>upDate</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <View books={books} deleteBook={deleteBook} updateBook={updateBook} search={search} />
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )}
                        {books.length < 1 && <div>No books are added yet</div>}
                    </div>
                </div>
            </div>
            <Dynamic />
        </form>



    );
}

export default Table