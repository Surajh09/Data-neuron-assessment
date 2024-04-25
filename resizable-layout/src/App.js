import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file

const GridComponent = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('');
  const [count, setCount] = useState(0);

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:8000/api/add', { name, password, experience });
      setExperience('');
      setCount(count + 1);
      alert('User data added successfully!');
    } catch (error) {
      console.error('Error adding user data:', error);
      alert('Failed to add user data. Please try again.');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put('http://localhost:8000/api/update', { name, password, experience });
      alert('User data updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('Failed to update user data. Please try again.');
    }
  };

  const handleCount = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/count');
      setCount(response.data.count);
    } catch (error) {
      console.error('Error counting user data:', error);
      alert('Failed to count user data. Please try again.');
    }
  };
  return (
    <div className="grid-container">
      <input className="grid-item item1"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name">
          </input>
      <input className="grid-item item2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          >
          </input>
      <input className="grid-item item3"
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Experience"
          >
      </input>
      
      <button
          onClick={handleAdd}
          className="btn"
        >
          Add
        </button>
        <button
          onClick={handleUpdate}
          className="btn"
        >
          Update
        </button>
        <button
          onClick={handleCount}
          className="btn"
        >
          Count: {count}
        </button>
    </div>
  );
};

export default GridComponent;