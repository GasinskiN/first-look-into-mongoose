const mongoose = require('mongoose');
    
//connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));
    
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
}

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "A pretty good fuit."
});

// apple.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Person = mongoose.model("Person", personSchema);

const joe = new Person({
    name: "Joe",
    age: 62
});

// joe.save();


const pear = new Fruit({
    name: "Pear",
    rating: 8,
    review: "A scrumptious and sweet fruit"
});

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 7,
    review: "A good tasting fruit but the preparing process is a pain"
});

const strawberry = new Fruit({
    name: "Strawberry",
    rating: 8,
    review: "If you can find ripe ones they are great"
});


run();

async function run(){
    try{
        const myfruit = await Fruit.find();
        console.log(myfruit);
    } catch(err){
        console.log(err);
    }
}