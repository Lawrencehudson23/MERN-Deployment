import React from 'react'
import Form from '../components/Form'

export default function NewPirate() {
    return (
        <div>
            <Form
                initialState={{
                    pirateName:"",
                    imageUrl:"",
                    crewPosition:"",
                    numOfTreasureChests:"",
                    pirateCatchPhrase:"",
                    isPegLeg:true,
                    idEyePatch:true,
                    isHookHan:true
                }}
                method="post"
                url="http://localhost:5000/api/pirates/new"

            />
        </div>
    )
}
