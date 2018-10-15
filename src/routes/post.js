let PostModel = require('../models/post_model.js');
let express = require('express');
let router = express.Router();

//create a new customer_model
// POST localhost:3000/customer
router.post('/post', (req, res) => {
  if(!req.body){
    return res.status(400).send('Request body is missing!');
  };

  /*
	{
	  "post_name": "my_awesome_post",
	  "post_pic_link": "https://instabuy.com/PictureItem/pic_id",
	  "post_date": {2016-05-18T16:00:00Z},
	  "post_location": "-32.0908, 12.3943"
	}

	*/

  let model = new PostModel(req.body);
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
router.get('/post', (req, res) => {
  if(!req.query.post_name){
    return res.status(400).send("Missing URL parameter: post_name");
  }
  PostModel.findOne({
    post_name: req.query.post_name
  })  //mongodb API usage
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.stats(500).json(err)
    });
});

//UPDATE customer information
router.put('/post', (req, res) => {
  if(!req.query.post_name){
    return res.status(400).send("Missing URL parameter: post_name");
  }
  PostModel.findOneAndUpdate({
    post_name: req.query.post_name
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
router.delete('/post', (req,res)=>{
  if(!req.query.post_name){
    return res.status(400).send("Missing URL parameter: post_name");
  }
  PostModel.findOneAndRemove({
    post_name: req.query.post_name
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
