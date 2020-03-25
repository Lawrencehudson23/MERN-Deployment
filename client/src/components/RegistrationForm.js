import React,{useState} from 'react'
import axios from "axios";
import { navigate } from '@reach/router';
import Alert from 'react-bootstrap/Alert';
// import { Button } from 'react-bootstrap';
export default function RegistrationForm() {

    const [formState, setFormState] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    const [errors, setErrors] = useState([])
    
    function handleChange(event) {
        const{name,value} = event.target;

        setFormState({
            ...formState,
            [name]:value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);
        axios.post('http://localhost:5000/api/users',formState,{
            withCredentials:true
        })
            .then(()=>navigate('/pirates'))
            .catch(err=>{
                console.log("real err here++>" + err);
                const innerErrors = err.response.data.errors;
                const newErrors = [];
                for(const key in innerErrors){
                    newErrors.push(innerErrors[key].message);
                    
                }
    
                setErrors(newErrors)
            })
    }
    return (
       

        <form onSubmit={handleSubmit}>
            {errors &&(
                <>
                {errors.map((error,i) => (
                <Alert variant="danger">
                <Alert.Heading key={i}>{error}</Alert.Heading>
                {/* // <strong style={{color: "red" }} key={i}>{error}<br/>init</strong> */}
                </Alert>
                ))}
                </>
            )}
            <div>
                <label>First Name</label>
                <input
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                name="email"
                value={formState.email}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Confirm Password</label>
                <input
                type="password"
                name="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleChange}
                />
            </div>
            <button>submit</button>
        </form>
        
    )
}
