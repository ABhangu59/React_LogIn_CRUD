// Hit add rfc

import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate()

    const[user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    }); 

    const{name,username,email} = user;

    // Do not forget to pass event in to function when doing onChange
    const onInputChange=(e) => {
        setUser( { ...user,   [e.target.name] : e.target.value })
    }

    // this is how we are pushig data onto our DB using the Axios class. 
    const onSubmit= async (e) => {
        e.preventDefault();
        // Using Axios now to push data
        await axios.post("http://localhost:8080/user", user);
        navigate("/")
    };


  return (
    
    <div className='container'>
        <h2>Sign Up</h2>
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
