import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    const [isSubmit, setIsSubmit] = useState(false);
    const [data, setData] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [books, setBooks] = useState(getDatafromLS());

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
        // navigate("/signup");
        localStorage.setItem("inputValue", firstname);
        localStorage.setItem("input", lastname);
        localStorage.setItem("Value", email);

        setFormValues(initialValues);
        setFormErrors({});
        setIsSubmit(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstname);
        console.log(lastname);
        console.log(email);
    }
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
        // setFromErrors((formValues));
        // setIsSubmit(true);
        // const errors = {};
        // if (!firstname) {
        //     errors.firstname = "firstname is required";
        // }
        // if (!lastname) {
        //     errors.lastname = "lastname is required";
        // }
        // if (!email) {
        //     errors.email = "email is required";
        // }
        // // If there are errors, set them in the state and return
        // if (Object.keys(errors).length > 0) {
        //     setFormErrors(errors);
        //     return;
        // } if (Object.keys(errors).length > 0) {
        //     setFormErrors(errors);

        //     // Save the errors in localStorage
        //     localStorage.setItem("formErrors", JSON.stringify(errors));

        //     return;
        // }
        // setFormValues(initialValues);
        // setFormErrors({});
        // setFirstname('');
        // setLastname('');
        // setEmail('');
        // setIsSubmit(true);
    };
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
                </div>
                <div className="veiw-container">
                    {books.length > 0 && <>
                        <div className="table-resposive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <view books={books} />
                                </tbody>
                            </table>
                        </div>
                    </>}
                    {books.length < 1 && <div>No books are addred yet</div>}
                </div>
            </div>
        </form>

    );
}

export default Table