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
    },
    favoriteFruit: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Fruit"
    }
});

// Get name of instance and greet the user with his name
personSchema.methods.sayHello = function() {
    console.log("Hello it's nice to meet you my name is " + this.name);
};

// Find all instances of a person with provided age
personSchema.statics.findByAge = function(age){
    return this.where({ age: age});
};

module.exports = mongoose.model("Person", personSchema);