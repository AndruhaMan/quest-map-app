import { useState } from 'react';
import { MarkerType } from './types/MarkerType';
import { Map } from './components/Map';

import './App.css';

function App() {
  const [markers, setMarkers] = useState<MarkerType | null>(null);  

  const handleDelete = () => {
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
