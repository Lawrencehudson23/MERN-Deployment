const Pirate = require("../models/pirate.model");

module.exports.createPirate = (req,res) => {
  const {
    pirateName,
    imageUrl,
    crewPosition,
    numOfTreasureChests,
    pirateCatchPhrase,
    isPegLeg,
    idEyePatch,
    isHookHand} = req.body;
  Pirate.create({
    pirateName,
    imageUrl,
    crewPosition,
    numOfTreasureChests,
    pirateCatchPhrase,
    isPegLeg,
    idEyePatch,
    isHookHand
  })
      .then(newPirate => res.json(newPirate))
      .catch(err=>res.status(400).json(err));
    
};
module.exports.showAllPirates = (_,res) => {
  Pirate.find().sort({pirateName:"asc"})
    .then(allPirates=>res.json(allPirates))
    .catch(err=>res.status(400).json(err));
    
};

module.exports.showOnePirate = (req,res)=> {
  Pirate.findById({_id:req.params.id})
    .then(pirate => res.json(pirate))
    .catch(err => res.status(400).json(err));
    
};
module.exports.editPirate = (req,res) => {
  Author.findByIdAndUpdate({_id:req.params.id},req.body, {new:true,runValidators:true})
    .catch(err=> res.status(400).json(err))
}
module.exports.deletePirate = (req,res) => {
  Pirate.findByIdAndDelete({_id:req.params.id})
    .then(result=>res.json(result))
    .catch(err=>res.status(400).json(err))
}