# Development Notes

This README is a documentation on how I did everything from the building of the API to the setting up of MongoDB.

## Tech stuff I used

1. Nodejs (Back-end code)
2. Atom (IDE)
3. Postman (API tester)
4. MongoDB (Database)
5. Mongoose (Backend <--> Server Middleware)
5. Express (Server)


## API Format

This is the format for the API calls, currently (as of 15th OCT, 2018) this is still in heavy development.

Remember, MongoDB has _id and __v by default. We only need to input the data inbetween.

Post

{ "_id" : ObjectId("5bc51e89ece06404ce02a9f7"), 
"post_location" : 
	{ "loc" : 
		{ "coordinates" : [ -73.97, 40.77 ], "type" : "Point" } 
	}, 
"post_name" : "some_post", 
"post_pic_link" : "https://instabuy.com/PictureItem/1", 
"post_date" : ISODate("2018-10-15T00:00:00Z"), 
"__v" : 0 }


Account

{
“name”: “My Awesome Name”,
“username”: “awesomeUsername”,
“email”: “***********@gmail.com”,
“password”: “1234”
}


** For more info, refer to my swagger hub at this link: https://app.swaggerhub.com/apis/skywall34/InstaBuyAPI/1.0.0#/


## Mongodb setup

You need the below to setup a server. Download mongodb through any installation that matches your environment.

**Starting the server**

Start mongo daemon: mongod
Start Mongo Shell: mongo

I gave myself admin access...still learning how to create users and permissions properly! The database I accessed is admin and the tables are created under that database. Be sure to remember which database you are storing your objects when you set your models.

## Create a User Administrator

use admin
db.createUser(
  {
    user: "myTester",
    pwd: "xyz123",
    roles: [ { role: "userAdminAnyDatabase
", db: “admin” },
            “readWriteAnyDatabase”
 ]
  }
)

Restart the mongodb instance with access control

mongo --auth (--port port #)

Connect and authenticate as the user administrator

mongo —port prot# -u “admin” -p “psw” —authenticationDatabase “admin”

TO authenticate after connecting

- Connect the mongo shell to the mongo

- mongo —port prot#


## Setting up a script to monitor for changes (nodemon)

install nodemon
- npm install nodemon
- npm i nodemon
- npm install nodemon —save
    - saves to the dependency file
    - after version 5 no longer need to do this
- npm install nodemon -D
    - Creates a dev dependency file for developing
    - only required during development time


Add the script to the package.json file

Under package.json

“scripts”{
“start-watch”: “nodemon src/index.js”,
}

With this you can make changes to your file without having to stop the server! Awesome!


# TODO

1. Set this up on the cloud (NOW library or AWS)
2. Finalize APIs (Swagger and Code)
3. Follow AirBnb Coding Practices
4. Make this code good enough for production
5. Setup security for passwords on mongodb
6. Setup proper query code for many or single database queries


