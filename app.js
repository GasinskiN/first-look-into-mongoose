const mongoose = require('mongoose');
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
    
    // try{
    //     const apple = await Fruit.create({
    //         name: "Joel",
    //         rating: 5,
    //         review: "its ok"
    //     });
    // } catch (err) {
    //     console.log(err.message);
    // }
    
    
    // const joe = new Person({
    //     name: "Joe",
    //     age: 62
    // });
    
    // await joe.save();
    
    

    
    // Fruit.insertMany([pear, pineapple, strawberry])
    //     .then(() => console.log("Inputting the items was succesful"))
    //     .catch((err) => console.log(err))
    
    // try {
    //     await Fruit.insertMany([pear, pineapple, strawberry]);
    //     console.log("Insert many operation was succesfull");
        
    // } catch (err) {
    //     console.log(err.message);
    // }


    try{
        const myfruit = await Fruit.find();
        console.log(myfruit);
    } catch(err){
        console.log(err.message);
    }

    // const res = await Fruit.updateMany({ rating: 5 }, { name: "Orange"});
    // console.log([res.acknowledged, res.modifiedCount]);

    // const response = await Fruit.deleteMany({ name: "Apple"});
    // console.log(response.deletedCount);

    mongoose.connection.close();
}