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

  // db.collection("Todos").find({completed:false}).toArray().then((docs) => {
  // db.collection("Todos").find({
  //   _id: new ObjectID('5aeb1bb4402b1b603448fcba')
  // }).toArray().then((docs) => {
  //   console.log('To do ');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log("Unable to fetch data",err);
  // });

  // db.collection("Todos").find().count().then((count) => {
  //   console.log('To do '+ count);
  //
  // },(err) => {
  //   console.log("Unable to fetch data",err);
  // });

db.collection('Users').find({name: 'Latifa'}).count().then((count) =>{
  console.log('Users ' );
  console.log(count);
},(err)=>{
  console.log("Unable to fetch users");
});
   //client.close();
 });
