const mongoose = require("mongoose");

const HopeSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Item is required"],
        minLength:[3, "Item must have at least 3 characters"]
        
    },
    item1: {
        type: String,
        required:[true, "Item is required"],
        minLength:[3, "Item must have at least 3 characters"]
        
    },
    item2: {
        type: String,
        required:[true, "Item is required"],
        minLength:[3, "Item must have at least 3 characters"]
        
    },
    item3: {
        type: String,
        required:[true, "Item is required"],
        minLength:[3, "Item must have at least 3 characters"]
        
    },
    item4: {
        type: String,
        required:[true, "Item is required"],
        minLength:[3, "Item must have at least 3 characters"]
        
    },
    size: {
        type: String,
        required:[true, "Please select the size"],
        
        
    },
    delivery: {type: String,
        required:[true, "Do you need delivery?"],
        
    },
    description: {type: String,
        // required:[true],
        minLength:[3, "Description must be at least 3 characters long"],
    },
    
}, {timestamps: true})

const Hope = mongoose.model("Hope", HopeSchema);
module.exports = Hope;