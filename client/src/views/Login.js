import React, {useState} from 'react'
import axios from "axios";
import {navigate} from '@reach/router';
import RegistrationForm from '../components/RegistrationForm';
import {Alert} from 'react-bootstrap'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        
        setErr('');

        axios
          .post("http://localhost:5000/api/users/login", {
              email,
              password
          },{ withCredentials:true })
          .then(()=> navigate('/pirates'))
          .catch(() =>{ 
            console.log('inside catch of login')  
            setErr('Please check your credentials!')});
    }
    
    return (
        <>
            {err &&(
            <Alert variant="danger">
                <Alert.Heading>{err}</Alert.Heading>
                
            </Alert>)}
            <h1>Login/Reg</h1>
            {/* {err && (
                <strong style={{color:'red'}}>{err}</strong>
            )} */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button>submit</button>
            </form>
            <RegistrationForm/>
        </>
    )
}
