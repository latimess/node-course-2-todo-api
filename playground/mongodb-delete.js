// const MongoClient = require('mongodb').MongoClient;
//The code below is identical to the one's obove, using ES6 destructuring object
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();// this is equivalent to __id
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete');
  // });

// deleteOne
// db.collection('Todos').deleteOne({text: "Walk the dog"}).then((result) => {
//   console.log(result);
// });

// findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then( (result)=> {
//   console.log(result);
// });

//Challenge
// db.collection("Users").deleteMany({name: "Latifa"}).then((result) => {
//   console.log(result);
// });

// db.collection("Users").findOneAndDelete({name: "Amel"}).then((result) => {
//   console.log(result);
//   });

db.collection("Users").deleteOne({
  _id: new ObjectID('5aeb1453ea979a25f814c928')
}).then((result) => {
  console.log(result);
  });

   //client.close();
 });
