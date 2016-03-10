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
└── web<br>
&nbsp ├── app.js<br>
&nbsp ├── config.js<br>
    ├── LICENSE
    ├── package.json
    ├── routes
    │   ├── charts.js
    │   ├── index.js
    │   ├── map.js
    │   ├── misc.js
    │   ├── ngas.js
    │   ├── oracle.js
    │   ├── scripts.js
    │   └── topusers.js
    └── views
        ├── charts.jade
        ├── empty.jade
        ├── error.jade
        ├── index.jade
        ├── layout.jade
        ├── map.jade
        ├── mapold.jade
        ├── ngas.jade
        ├── oracle.jade
        └── topusers.jade



Usage:<br>
<h1>Adding a new dashboard</h1><br>
1)Copy the file routeTemplate.js and rename it to the name of your new dashboard route: <br>
cp routeTemplate.js newdashboard.js <br>

2)Copy the file viewTemplate.jade and rename it to the name of your new dashboard view: <br>
cp viewTemplate.jade newdashboard.jade <br>

3) Add your new dashboard to the app.js file in the Adding Routes section: <br>
var newdashboard = require('./newdashboard'); <br>
and letting node use the route in the Mounting Middlewares section: <br>
app.use('/newdashboard',newdashboard); <br>

<h1>Creating a route that connects to mongoDB</h1>

<h1> Creating our first widget </h1> 

<h1> Creating a table </h1>

<h1> Creating a bar chart</h1>

