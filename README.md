# APO-Dashboard

<img src="tiger.jpg" alt="Mountain View" style="width:304px;height:228px;">
Source Code for APO Dashboards

The basic structure for the dashboard is:
APO/<br>
...web/<br>
....../node_modules (contains node modules/libraries for development such us express(mongodb), jade, async, etc. )<br>
....../public (contains css,icons,images, js chart libraries etc.)<br>
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

Usage:<br>
For adding a new dashboard<br>
Go to
