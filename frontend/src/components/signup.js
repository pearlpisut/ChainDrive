import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router v6

const Signup = () => { 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate(); // Use the navigate function

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        console.log("submitted!");
        console.log(username, password)
        axios.post('http://localhost:2730/api/auth/signup', { 
            username, 
            password, 
        })
        .then(res =>{
            console.log(res)
            if(res.data.status == 'ok'){
                alert('successfully registered new user')
            } 
            else alert('registration failed')
        })

    }; 

    return ( 
        <div> 
            <h2>Signup</h2> 
            <form onSubmit={handleSubmit}> 
                <div> 
                    <label>Username:</label> 
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required // Ensure the field is required
                    /> 
                </div> 
                <div> 
                    <label>Password:</label> 
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required // Ensure the field is required
                    /> 
                </div> 
                <button type="submit">Signup</button> 
            </form> 
        </div> 
    ); 
}; 

export default Signup;