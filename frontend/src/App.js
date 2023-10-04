import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [helloWorldResponse, setHelloWorldResponse] = useState();

  useEffect(() => {
    axios.get("/api/hello-world")
      .then((response) => {
        setHelloWorldResponse(response.data);
      })
      .catch((error) => {
        setHelloWorldResponse(error.message);
      })
  })

  return (
    <div className="App">
      <p>/api/hello-world: { helloWorldResponse }</p>
    </div>
  );
}

export default App;
