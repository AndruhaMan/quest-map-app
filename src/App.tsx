import { useEffect, useState } from 'react';
import { MarkerType } from './types/MarkerType';
import { Map } from './components/Map';

import './App.css';
import { getFromDB, writeToDB } from './firebase';

function App() {
  const [markers, setMarkers] = useState<MarkerType | null>(null); 

  useEffect(() => {
    getFromDB()
      .then(setMarkers);
  }, []);

  const handleDelete = () => {
    writeToDB(null);
    setMarkers(null);
  }

  return (
    <div className="App">
      <Map markers={markers} setMarkers={setMarkers} />

      <button className='App__button' onClick={handleDelete}>
        Delete all markers
      </button>
    </div>

  );
}

export default App;
