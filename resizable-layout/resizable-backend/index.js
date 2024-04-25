const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const mongoose = require('mongoose');

// vHAPyeaL2oPdJ3XX
// const mongoURI = 'mongodb+srv://surajhemnani04:vHAPyeaL2oPdJ3XX@data-neuron-assessment.tcryenj.mongodb.net/?retryWrites=true&w=majority&appName=Data-neuron-assessment';

const mongoURI = 'mongodb+srv://surajhemnani04:vHAPyeaL2oPdJ3XX@data-neuron-assessment.tcryenj.mongodb.net/';

// Connection options
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// Establish the connection
mongoose.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error.message);

		// Handle specific error conditions
		if (error.name === 'MongoNetworkError') {
			console.error('Network error occurred. Check your MongoDB server.');
		} else if (error.name === 'MongooseServerSelectionError') {
			console.error('Server selection error. Ensure'
				+ ' MongoDB is running and accessible.');
		} else {
			// Handle other types of errors
			console.error('An unexpected error occurred:', error);
		}
	});

// Handling connection events
const db = mongoose.connection;

db.on('error', (error) => {
	console.error('MongoDB connection error:', error);
});

db.once('open', () => {
	console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
	console.log('Disconnected from MongoDB');
});

// Gracefully close the connection when the application exits
process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Mongoose connection is disconnected'
		+ ' due to application termination');
		process.exit(0);
	});
});

app.use(bodyParser.json());
app.use(cors());

let userData = [];

app.post('/api/add', (req, res) => {
  const { name, password, experience } = req.body;
  const newUser = { name, password, experience };
  userData.push(newUser);
  console.log("added")
  console.log(newUser)
  res.json({ message: 'User data added successfully', user: newUser });
});

app.put('/api/update', (req, res) => {
  const { name, password, experience } = req.body;
  const index = userData.findIndex(user => user.name === name);
  if (index !== -1) {
    userData[index] = { name, password, experience };
    res.json({ message: 'User data updated successfully', user: userData[index] });
    console.log(userData[index])
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.get('/api/count', (req, res) => {
  const count = userData.length;
  res.json({ count });
});

app.get('/', (req, res) => {
  console.log("home")
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
