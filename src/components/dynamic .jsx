import React from 'react'
import User from './User'
import { Link, Routes, Route } from "react-router-dom"
const Dynamic = () => {
    let users = [
        { id: 1, name: "jay", email: 'jay@gmail.com' },
        { id: 2, name: "ajay", email: 'ajay@gmail.com' },
        { id: 3, name: "jaydeep", email: 'jaydeep@gmail.com' },
        { id: 4, name: "petter", email: 'petter@gmail.com' },
        { id: 5, name: "hari", email: 'hari@gmail.com' },
    ]
    return (
        <div>

            <h1>react dynamic routing in react js</h1>
            {
                users.map((item) =>
                    <div><Link to={'./user/' + item.id+"/"+item.name}><h3>{item.name}</h3></Link></div>)
            }

            <Routes>
                <Route path='/user/:name:id' element={<User />} />
            </Routes>
        </div>
    )
}

export default Dynamic 
