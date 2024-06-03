import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const[users,SetUsers] = useState([]);

    const {id} = useParams();

    // This runs whenever the page is loaded. 
    useEffect(()=>{
        loadUsers();
    }, []);

    // This loads users by getting them from Axios API 
    const loadUsers = async() => 
    {
        const result = await axios.get("http://localhost:8080/users");
        SetUsers(result.data);
    };

    const delUsers = async(id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    };

  return (
    <div className='container'>
        <div className='table'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>

                {/* Adding in Dynamic Data*/}
                <tbody>
                    {
                        users.map((user,index) => (
                            <tr>
                                <th scope='row' key={index}>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>

                                {/* This section adds in the buttons to the tables*/}
                                <td>
                                    <Link to={`/viewuser/${user.id}`} className='btn btn-outline-primary mx-2'>View</Link>
                                    <Link to={`/edituser/${user.id}`} className='btn btn-outline-secondary mx-2'>Edit</Link>

                                    {/* Delete Functionality */}
                                    <button className='btn btn-danger mx-2' onClick={() => delUsers(user.id)} >Delete</button>
                                </td>

                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
