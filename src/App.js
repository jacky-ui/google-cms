import './styles/App.css';
import { Axios } from 'axios';
import { useState, useEffect } from 'react';
const { GOOGLE_WEBSITE } = process.env;

function App() {
  const [cmsContent, setCmsContent] = useState(null);

  return (
    <>
      <h1>Test using Google Sheets as CMS</h1>
      <ul>
        <li>
          <h2></h2>
          <p></p>
        </li>
        <li>
          <h2></h2>
          <p></p>
        </li>
        <li>
          <h2></h2>
          <p></p>
        </li>                
      </ul>
    </>
  );
}

export default App;
