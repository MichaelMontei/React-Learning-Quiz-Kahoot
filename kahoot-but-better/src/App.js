import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
        fetch ("https://opentdb.com/api_count.php?category=11")
            .then(response => response.json())
            .then (json => console.log(json))
    }, [resourceType])

    return (
      <div>

      <Header />
          <h1>{resourceType}</h1>
          <button onClick={() => setResourceType('Video Games') }>Entertainment: Video Games</button>
          <button onClick={() => setResourceType('Film') }>Entertainment: Film</button>
          <button onClick={() => setResourceType('Music') }>Entertainment: Music</button>
      <Footer />
      </div>
      );
}

export default App;
