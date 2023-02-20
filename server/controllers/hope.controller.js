const Hope = require('../models/hope.model')
// Hope model import above

module.exports = {
    findAll: (req, res) => {
        Hope.find()
            .then((allHopes) => res.json(allHopes))
            .catch((err) => res.status(400).json({message: "Something went wrong", error: err})
            );
    },
    findOne: (req, res) => {
        console.log("params id", req.params.id)
        Hope.findById(req.params.id)
        .then((hope) => {res.json(hope); console.log(Hope)})
        .catch((err) => res.status(400).json({message: "Something went wrong", error: err})
        );
    },
    create: (req, res) => {
        Hope.create(req.body)
        .then((newHope) => res.json(newHope))
        .catch((err) => res.status(400).json({message: "Something went wrong", error: err})
        );
    },
    update: (req, res) => {
        Hope.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        .then((updatedHope)=> res.json(updatedHope))
        .catch ((err)=>res.status(400).json({message:"Something Went Wrong", error: err})
        );

    },
    deleteHope:(req, res) => {
        Hope.findByIdAndDelete({_id:req.params.id})
        .then((deletedHope) => res.json(deletedHope))
        .catch((err) => res.status(400).json({message:"Something went wrong", error: err})
        );
    }

}
