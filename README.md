# APO-Dashboard

<img src="tiger.jpg" alt="Mountain View" style="width:304px;height:228px;">
Source Code for APO Dashboards

The basic structure for the dashboard is:
APO/<br>
...web/<br>
....../node_modules (contains node modules/libraries for development such us express(mongodb), jade, async, etc. )<br>
....../public (contains css,icons,images, js chart libraries etc.)<br>
....../
....../views (contains the jade code)<br>
........../index.jade<br>
........../ngas.jade<br>
........../oracle.jade<br>
........../topusers.jade<br>
........../charts.jade<br>
........../map.jade<br>
....../routes (contains the node/express code handles all the data)<br>
........../index.js<br>
........../ngas.js<br>
........../oracle.js<br>
........../topusers.js<br>
........../charts.js<br>
........../map.js<br>
........../template.js<br> (contains the basic code for creating a new route)

APO<br>
├── package.json<br>
├── README.md<br>
└── web <br>
   ├── app.js <br>
   ├── config.js <br>
   ├── LICENSE <br> 
   ├── package.json <br>
   ├── routes <br>
   │   ├── charts.js <br>
   │   ├── index.js <br>
   │   ├── map.js <br>
   │   ├── misc.js <br>
   │   ├── ngas.js <br>
   │   ├── oracle.js <br>
   │   ├── scripts.js <br>
   │   └── topusers.js <br>
   └── views <br>
       ├── charts.jade <br>
       ├── empty.jade <br>
       ├── error.jade <br>
       ├── index.jade <br>
       ├── layout.jade <br>
       ├── map.jade <br>
       ├── mapold.jade <br>
       ├── ngas.jade <br>
       ├── oracle.jade <br>
       └── topusers.jade <br>


Usage:<br>

<h1>Handling mongoDB Data </h1>
Enter the mongo Shell: <br>
`mongo`
Show databases: <br>
`show dbs`
In order to create a database we first need to insert at least one record in a collection. I will create a db called 'testdb':
`use testdb`
`db.firstcollection.insert({"test":"test"})`
Now we can see our new db with:
`show dbs`




<h1>Inserting data into mongoDB from a python script</h1>
Create a python script with the following code inside:

`
from pymongo import MongoClient
from datetime import datetime

client = MongoClient()
db = client.test

servicename = "myService"
data = 123456

result = db.testing.insert_one({
	"servicename" : servicename,
	"data": data,
	"timestamp" : datetime.now()
)}
`

<h1>Adding a new dashboard</h1><br>
1)Copy the file routeTemplate.js and rename it to the name of your new dashboard route: <br>
`cp routeTemplate.js newdashboard.js` <br>

2)Copy the file viewTemplate.jade and rename it to the name of your new dashboard view: <br>
`cp viewTemplate.jade newdashboard.jade` <br>

3) Add your new dashboard to the app.js file in the Adding Routes section: <br>
`var newdashboard = require('./newdashboard');` <br>
and letting node use the route in the Mounting Middlewares section: <br>
`app.use('/newdashboard',newdashboard);` <br>

<h1>Creating a route that connects to mongoDB</h1>
There is a template file also, that has all the basic stuff to retrieve data from mongo. Most of the routes (all of them actually) requires multiple calls to different collections, or multiple http calls, so that's why I use the async module, because it allows to make this calls in a asynchronous way, and then retrieve the results, do whatever I want with them, and then send the data to the view..<br>
So let's get started. Copy the file routeTemplate.js and rename it to the name of your new dashboard route: <br>
cp

<h1> Creating our first widget </h1> 

<h1> Creating a table </h1>

<h1> Creating a bar chart</h1>

