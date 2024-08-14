import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
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
    const [password, setPassword] = useState('');

    const handleClick = () => {
        console.log(data?.current?.value, "initial value");
        const errors = {};
        if (!firstname) {
            errors.username = "Username is required";
        }
        if (!lastname) {
            errors.lastname = "Email is required";
        }
        if (!email) {
            errors.email = "email is required";
        }
        if (!password) {
            errors.password = "Password is required";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        } if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            localStorage.setItem("formErrors", JSON.stringify(errors));
            return;
        }

        navigate("/signup");
        localStorage.setItem("inputValue", firstname);
        localStorage.setItem("input", lastname);
        localStorage.setItem("Value", email);
        localStorage.setItem("Valuehari", password);
        setFormValues(initialValues);
        setFormErrors({});
        setIsSubmit(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        console.log(password);
    }

    console.log(localStorage.getItem("inputValue"), "****")
    const handlesubmitform = (e) => {
        e.preventDefault();
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
        if (!password) {
            errors.password = "Password is required";
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
        setPassword('');
        setIsSubmit(true);
    };

    return (
        <form className="container" onSubmit={handlesubmitform}>
            <div className="card" >
                <div className="card-header">
                    <h2>Register</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>FirstName</label>
                        <input value={firstname} onChange={e => setFirstname(e.target.value)} className="form-control"
                            placeholder=" Enter the firstname" />
                        {formErrors.firstname && <div className="error">{formErrors.firstname}</div>}
                    </div>
                    <div className="form-group">
                        <label>LastName</label>
                        <input value={lastname} onChange={e => setLastname(e.target.value)} className="form-control"
                            placeholder="Enter the LastName" />
                        {formErrors.lastname && <div className="error">{formErrors.lastname}</div>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter the email" />
                        {formErrors.email && <div className="error">{formErrors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter the password" />
                        {formErrors.password && <div className="error">{formErrors.password}</div>}
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" onClick={handleClick} >
                        Register
                    </button>
                    <h6>Don't have an account? <Link to="/signup">Sign up</Link></h6>
                </div>
            </div>
        </form>

    );
}

export default Homepage