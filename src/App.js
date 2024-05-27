import './styles/App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
const { REACT_APP_URL } = process.env;

function App() {
  const [cmsContent, setCmsContent] = useState(null);
  const [errorMessage, setErrorMessage] = useState('Loading....');

  useEffect(() => {
    axios
      .get(REACT_APP_URL)
      .then((response) => {
        console.log(response.data.data);
        setCmsContent(response.data.data);
      })
      .catch((error) => {
        setErrorMessage('Error with GET request. Check console and/or restart')
        console.log(`Problem with GET request: ${error}`)
      })
  }, []);

  return (
    <>
      {cmsContent ? 
        <div>
          <h1>Test using Google Sheets as CMS</h1>
          <ul>
            <li>
              <h2></h2>
              <p></p>
            </li>              
          </ul>
        </div>
        :
        <h1>{errorMessage}</h1>
      }
    </>
  );
}

export default App;
