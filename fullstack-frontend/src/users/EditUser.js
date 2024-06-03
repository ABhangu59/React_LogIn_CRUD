// Hit add rfc

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate=useNavigate();
    const {id} = useParams(); // another hook to get the ID. 

    const[user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    }); 

    const{name,username,email} = user;

    useEffect(() => {
        loadUser();
    }, [])
    // Do not forget to pass event in to function when doing onChange
    const onInputChange=(e) => {
        setUser( { ...user,   [e.target.name] : e.target.value });
    }

    // this is how we use edit functionality. 
    const onSubmit= async (e) => {
        e.preventDefault();
        // Using Axios now to push data
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/")
    };

    const loadUser = async(e) => 
    {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);

    }


  return (
    
    <div className='container'>
        <h2>Edit User</h2>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mb-5 mt-3  shadow '>

            <form onSubmit={(e) => onSubmit(e)} >
                <div className='nameSection'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                </div>

                <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your name'
                    name="name"  
                    value={name} 
                    onChange={(e)=>onInputChange(e)}
                    /> 
                    {/* Above, assigning the event change to the input chanmge event.  */}
                

                <div className='userNameSection'>
                    <label htmlFor='Username' className='form-label'>
                        Username
                    </label>
                </div>
                <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter a suitable username'
                    name="username"  
                    value={username} 
                    onChange={(e)=>onInputChange(e)} 
                />

                <div className='emailSection'>
                    <label htmlFor='Email' className='form-label'>
                        E-mail
                    </label>
                </div>
                <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your email'
                    name="email"  
                    value={email} 
                    onChange={(e)=>onInputChange(e)}/>

            <hr></hr>
            <button type="submit" className='btn btn-outline-primary mx-2'>Submit</button>
            <Link to="/" className='btn btn-outline-danger mx-2' >Cancel</Link>
            </form>
            </div>
            
            
        </div>

    </div> // React Router Dom

  )
}
