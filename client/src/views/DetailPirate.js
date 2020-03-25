import React,{useEffect,useState} from 'react'
import axios from "axios";
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';
export default function DetailPirate({id}) {
    const [pirate, setPirate] = useState({})
    useEffect(() => {
        axios
          .get("http://localhost:5000/api/pirates/"+id,{
            withCredentials:true
        })
          .then(res => {console.log(res);  setPirate(res.data)})
          .catch(err => {
              navigate('/')
              console.error(err)},
              );
    }, [id])
    return (
        <div>
            <h1>Pirate Details</h1>
            
            <h2>potion: {pirate.crewPosition}</h2>
            <img src={pirate.imageUrl} alt={pirate.pirateName} width="200"/>
            <h2>crewPosition: {pirate.crewPosition}</h2>
            <h2>numOfTreasureChests: {pirate.numOfTreasureChests}</h2>
            <h2>pirateCatchPhrase: {pirate.pirateCatchPhrase}</h2>
            <h2>Peg Leg: Yes <button>no</button></h2>
            <h2>Eye Patch: Yes <button>no</button></h2>
            <h2>Hook Hand: Yes <button>no</button></h2>
            


            <DeleteButton pirateId={pirate._id} successCallback={() => navigate('/pirates')}/>
        </div>
    )
}
