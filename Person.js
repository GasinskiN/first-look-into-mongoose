const mongoose = require("mongoose");


const personSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: [18, "Only for people over the age of 18"],
        max: [125, "Your age is higher than the longest living person you should apply for a guiness record"]
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    }
});

module.exports = mongoose.model("Person", personSchema);