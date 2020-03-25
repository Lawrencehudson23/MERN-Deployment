import React from 'react'
import axios from "axios";
import { Button } from 'react-bootstrap';
export default function DeleteButton({pirateId,successCallback}) {
    function handleDelete(event){
        axios
          .delete("http://localhost:5000/api/pirates/"+pirateId)
          .then(() => {successCallback()})
          .catch(err => console.log({message:"cant delete😡",error:err}));
    }
    return (
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
       
    )
}
