const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

let userData = [];

app.post('/api/add', (req, res) => {
  const { email, password, experience } = req.body;
  const newUser = { email, password, experience };
  userData.push(newUser);
  console.log("added")
  console.log(newUser)
  res.json({ message: 'User data added successfully', user: newUser });
});

app.put('/api/update', (req, res) => {
  const { email, password, experience } = req.body;
  const index = userData.findIndex(user => user.email === email);
  if (index !== -1) {
    userData[index] = { email, password, experience };
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
