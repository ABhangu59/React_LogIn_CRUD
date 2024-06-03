import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



export default function ViewUser() {
    const {id} = useParams(); // another hook to get the ID. 

    const[user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    }); 

    useEffect(() => {loadUser()}, []);

    const loadUser= async () => 
    {
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);


    };

    return(
        <div className='container'>
        <h2>User Details</h2>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mb-5 mt-3  shadow '>
                    <div className='card'>
                        <div className='card-header'>
                            User Details:
                            <ul className='list-group list-group-flush'>
                                <b>ID: </b> {user.id}

                                <li className="list-group-item">
                                    <b>Name: </b>
                                    {user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Username: </b>
                                    {user.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {user.email}

                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Return</Link>
                </div>
            </div>
        </div>
    )
}