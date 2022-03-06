const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require("cors");
var corsOptions = {
  origin: ["http://localhost:3000",'https://protected-wildwood-15719.herokuapp.com'],
    credentials: true,
};

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



require('./server/routes/AuthRoutes')(app);
require('./server/routes/UserRoutes')(app);

const db = require("./server/model/index");
db.sequelize.authenticate()
    .then(() => {
      console.log('Connection to DB has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
  
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);
