const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    pirateName:{
        type:String,
        required:[
            true,
            "Name is required"
        ]
        
    },
    imageUrl:{
        type:String,
        required:true,
        minlength: [
            5,
            "image url have to be at least 5 characters"
        ]
        
    },
    crewPosition:{
        type:String,
        required:[
            true,
            "Position is required"
        ],
        default:"Gunner"
        
    },
    numOfTreasureChests:{
        type: Number,
        required:[
            true,
            "chest number is required"
        ]
    
    },
    pirateCatchPhrase:{
        type:String,
        required:[
            true,
            "pirate Catch Phrase is required"
        ]
    },

    isPegLeg:{
        type:Boolean,
        default:true
    },
    idEyePatch:{
        type:Boolean,
        default:true
    },
    isHookHand:{
        type:Boolean,
        default:true
    }
},{ timestamps: true });

module.exports = mongoose.model("Pirate",PirateSchema);