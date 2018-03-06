const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;


server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if(err){
    console.log(err);
    return;
  }

  const db = client.db('education_app');
  console.log('Connected to db');

// create
  server.post('/computers', function (req, res) {
    const computersCollection = db.collection('computers');
    const computerToSave = req.body;

    computersCollection.save(computerToSave, function (err, result) {
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(201);
      res.json(result.ops[0]);
      console.log('saved to db');
    });
  });

  // index
  server.get('/computers', function (req, res) {
    const computersCollection = db.collection('computers');
    computersCollection.find().toArray(function (err, allComputers) {
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.json(allComputers);
    })
  })

  // delete all
  server.delete('/computers', function (req, res) {
    const computersCollection = db.collection('computers');
    const filterObject = {};

    computersCollection.deleteMany(filterObject, function (err, result) {
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(204);
      res.send();
    });
  });

  server.listen(3000, function () {
    console.log('Listening on port 3000');
  })
})
