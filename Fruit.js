const mongoose = require('mongoose');
    
const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Why no name"]
    },
    rating: Number,
    review: String
});

module.exports = mongoose.model("Fruit", fruitSchema);