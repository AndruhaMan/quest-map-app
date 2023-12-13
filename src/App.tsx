import { useState } from 'react';
import { MarkerType } from './types/MarkerType';
import { Map } from './components/Map';

import './App.css';

function App() {
  const [markers, setMarkers] = useState<MarkerType[]>([]);
  return (
    <div className="App">
      <Map markers={markers} setMarkers={setMarkers} />
    </div>
  );
}

export default App;
