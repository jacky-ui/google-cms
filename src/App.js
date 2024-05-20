import './styles/App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
const { REACT_APP_URL } = process.env;

function App() {
  const [cmsContent, setCmsContent] = useState(null);

  useEffect(() => {
    axios
      .get(REACT_APP_URL)
      .then((response) => {
        console.log(response.data.data);
        setCmsContent(response.data.data);
      })
  }, []);

  return (
    <>
      <h1>Test using Google Sheets as CMS</h1>
      <ul>
        <li>
          <h2></h2>
          <p></p>
        </li>              
      </ul>
    </>
  );
}

export default App;
