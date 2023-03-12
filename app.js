const mongoose = require('mongoose');
// require fruit and person Schemas and models
const Fruit = require("./Fruit"); 
const Person = require("./Person");  


//connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));

// make some fruit objects for testing insertMany functionality
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

    
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
    
    // insert an apple into the fruit collection
    // try{
    //     const apple = await Fruit.create({
    //         name: "Joel",
    //         rating: 5,
    //         review: "its ok"
    //     });
    // } catch (err) {
    //     console.log(err.message);
    // }
    
    // Insert joe into the people collection
    // const jeff = new Person({
    //     name: "George",
    //     age: 33
    // });
    // await jeff.save();
    
    try { 
        const person = await Person.where("age").gt(32).populate("favoriteFruit").limit(1);
        console.log(person);
        await person[0].save();
    } catch (err) {
        console.log(err.message);
    }
    

    // Inset a pear, pineapple and strawberry item into the Fruit collection
    // Fruit.insertMany([pear, pineapple, strawberry])
    //     .then(() => console.log("Inputting the items was succesful"))
    //     .catch((err) => console.log(err))
    
    // try {
    //     await Fruit.insertMany([pear, pineapple, strawberry]);
    //     console.log("Insert many operation was succesfull");
        
    // } catch (err) {
    //     console.log(err.message);
    // }

    // log to console all the items in the fruit collection
    try{
        const myPerson = await Person.find();
        console.log(myPerson);
    } catch(err){
        console.log(err.message);
    }


    // Update any fruit items that have the rating of five with the name orange
    // const res = await Fruit.updateMany({ rating: 5 }, { name: "Orange"});
    // console.log([res.acknowledged, res.modifiedCount]);


    // delete any fruit items that have the name Apple
    // const response = await Fruit.deleteMany({ name: "Apple"});
    // console.log(response.deletedCount);

    mongoose.connection.close();
}