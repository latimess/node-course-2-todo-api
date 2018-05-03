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

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //     if(err){
  //       return console.log('Unable to insert todo', err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });

// db.collection('Users').insertOne({
//     name: 'Latifa',
//     age: 43,
//     location: 'Montreal'
//   }, (err, result) => {
//       if(err) {
//         return console.log('Unable to insert user');
//       }
//     console.log(result.ops[0]._id.getTimestamp());
//   });
   client.close();
 });
