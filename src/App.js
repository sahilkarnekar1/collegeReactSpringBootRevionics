import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollegeList from './components/CollegeList';
import './App.css';

function App() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Fetch the list of colleges
    axios.get('http://localhost:8080/api/colleges')
      .then(response => {
        setColleges(response.data);
        console.log(response);
      })
      .catch(error => console.error('Error fetching college data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>College and Course Details</h1>
      </header>
      <main>
        <CollegeList colleges={colleges} />
      </main>
    </div>
  );
}

export default App;
