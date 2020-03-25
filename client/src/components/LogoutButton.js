import React from 'react'
import axios from "axios";
import { navigate } from '@reach/router';
import {Button} from 'react-bootstrap';

export default function LogoutButton() {
    function handleClick(event){
        axios
          .delete("http://localhost:5000/api/users/logout",
          { withCredentials:true })
          .then(() => navigate('/'))
          .catch(err => console.error(err));
    }
    return (
        <div>
            <Button onClick={handleClick}>Log Out</Button>
        </div>
    )
}
