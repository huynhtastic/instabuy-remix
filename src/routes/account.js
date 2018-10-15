let AccountModel = require('../models/account_model.js');
let express = require('express');
let router = express.Router();

//create a new customer_model
// POST localhost:3000/customer
router.post('/account', (req, res) => {
  if(!req.body){
    return res.status(400).send('Request body is missing!');
  };

  //let user = {
  //  name: 'firstname lastname',
  //  username: 'username',
  //  email: 'email@gmail.com',
  //  password: 'password'
  //};

  let model = new AccountModel(req.body);
  model.save() //save the model to the database
    .then(doc => { //check if the document has been saved
      if (!doc || doc.length === 0){
        return res.status(500).send(doc);
      }
      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });

});

//GET
router.get('/account', (req, res) => {
  if(!req.query.email){
    return res.status(400).send("Missing URL parameter: email");
  }
  AccountModel.findOne({
    email: req.query.email
  })  //mongodb API usage
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.stats(500).json(err)
    });
});

//UPDATE customer information
router.put('/account', (req, res) => {
  if(!req.query.email){
    return res.status(400).send("Missing URL parameter: email");
  }
  AccountModel.findOneAndUpdate({
    email: req.query.email
  }, req.body, {
    new: true //make sure that the change actally went through
  })  //mongodb API usage
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.stats(500).json(err)
    });
});


//DELETE
router.delete('/account', (req,res)=>{
  if(!req.query.email){
    return res.status(400).send("Missing URL parameter: email");
  }
  AccountModel.findOneAndRemove({
    email: req.query.email
  })  //mongodb API usage
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.stats(500).json(err)
    });
});

//export the module so that the index.js can use
module.exports = router;
