import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/images/`)
    .then(results => {
      console.log(results.data)
    setImages(results.data)
    })
  },[])

  return (
    <div>
      {JSON.stringify(images)}
    </div>
  );
}

export default App;
