import React,{useEffect,useState} from 'react'
import axios from "axios";
import {Link, navigate} from "@reach/router";
import LogoutButton from './LogoutButton';
import DeleteButton from './DeleteButton';
import  Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


export default function PirateList() {
    const [pirates, setPirates] = useState(null)
    useEffect(() => {
        axios
          .get("http://localhost:5000/api/pirates",{
              withCredentials:true
          })
        //   .then(res=>console.log(res))
          .then(res => setPirates(res.data))
          .catch(err => {
            console.log(err);
            navigate('/')
          });
    }, [pirates])

    function removeFromDom(pirateId) {
        setPirates(pirates.filter(pirate => pirate.id !== pirateId))
    }

    return pirates ==null ?  (
    <Spinner animation="border" role="status">

        <span className="sr-only">Loading...</span>
     </Spinner>
  ) : (<div>
        <table>
            <thead>
                <tr>
                    <th>
                       Url 
                    </th>
                    <th>
                       Pirate 
                    </th>
                    <th>
                       Actions available 
                    </th>
                </tr>
            </thead>
            <tbody>
                {pirates.map((pirate)=>(
                    <tr key={pirate._id}>
                        <td>
                            <img src={pirate.imageUrl} alt={pirate.pirateName} width="100"/>

                        </td>
                        <td>
                                <strong>{pirate.pirateName}</strong>
                        </td>
                        <td>
                            <Link to={"/pirates/" + pirate._id}>
                            <Button variant="primary">View Pirate</Button>
                            </Link>
                            {" "}
                            <DeleteButton 
                            pirateId={pirate._id} 
                            successCallback={() => removeFromDom(pirate._id)}/>
                        </td>

                    </tr>
                    ))}
            </tbody>
        </table>
        <LogoutButton/>
    </div>)
}
