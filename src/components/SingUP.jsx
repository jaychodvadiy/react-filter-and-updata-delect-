
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function BasicExample() {
    const navigate = useNavigate()
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues)
    const [FromErrors, setFromErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleClick = () => {
        console.log(data.current.value, "initial value");
        const errors = {};
        if (!username) {
            errors.username = "Username is required";
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

        navigate('/')
        // e.preventDefault();
        localStorage.setItem("inputValue", username)
        localStorage.setItem("Value", password)
        setFromErrors((formValues));
        setIsSubmit(true);

        setFormValues(initialValues);
        setFormErrors({});

        setUsername('');
        setPassword('');
    }

    console.log(localStorage.getItem("inputValue"), "****")
    const handlesubmitform = (e) => {
        e.preventDefault();
        setFromErrors((formValues));
        setIsSubmit(true);
        const errors = {};
        if (!username) {
            errors.username = "Username is required";
        }
        if (!password) {
            errors.password = "Password is required";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        } else if (Object.keys(errors).length > 0) {
            setFormErrors(errors);

            localStorage.setItem("formErrors", JSON.stringify(errors));

            return;
        }
        setFormValues(initialValues);
        setFormErrors({});

        setUsername('');
        setPassword('');

    };
    
    return (
        <>
            <h2 className="mx-10">Loging</h2>
            <form  onSubmit={handlesubmitform}>
                <div>
                    <label htmlFor="username" className="mx-2">UsreName:</label>
                    <input type="username" ref={data}
                        value={username}
                        className="form-control"
                        id="username"
                        placeholder="username"
                        onChange={e => setUsername(e.target.value)} />

                    {isSubmit && formErrors.username && <div className="error">{formErrors.username}</div>}
                </div>
                <div>
                    <label htmlFor="password" className="mx-2">Password:</label>
                    <input type="password" ref={data}
                        className="form-control"
                        // id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    {isSubmit && formErrors.password && <div className="error">{formErrors.password}</div>}
                </div>
                <button type="submit" onClick={handleClick} >
                    SingUP
                </button>
            </form >
        </>
    );
}
export default BasicExample