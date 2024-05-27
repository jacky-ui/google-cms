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
        console.log(response.data);
        console.log(typeof([response.data]))
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
            <div className='container'>
              {cmsContent.map((contents) => (
                <ul key={contents.title}>
                  <li>
                    <h2>{contents.title}</h2>
                    <img 
                      src={contents.image}
                      alt=""
                    />
                    <p>{contents.contents}</p>
                  </li>
                </ul>
              ))}
            </div>
        </div>
        :
        <h1>{errorMessage}</h1>
      }
    </>
  );
}

export default App;
