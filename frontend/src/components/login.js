import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router v6

const Login = () => { 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate(); // Use the navigate function

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        console.log("submitted!");
        try { 
            console.log(username, password)
            const response = await axios.post('http://localhost:2730/api/auth/login', { 
                username, 
                password, 
            }); 
            localStorage.setItem('token', response.data.token); 
            navigate('/dashboard'); // Use navigate instead of history.push
        } catch (error) { 
            console.error(error); 
            alert('Login failed. Please check your username and password.'); // Alert user on error
        } 
    }; 

    return ( 
        <div> 
            <h2>Login</h2> 
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
                <button type="submit">Login</button> 
            </form> 
        </div> 
    ); 
}; 

export default Login;