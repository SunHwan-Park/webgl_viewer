import { useState } from 'react';
import TopBar from './components/TopBar';
import ImageViewer from './components/ImageViewer';

function App() {
  const [scale, setScale] = useState(1);
  return (
    <div style={{ width: '100wh', height: '100vh', overflow: 'hidden' }}>
      <TopBar scale={scale} setScale={setScale} />
      <ImageViewer scale={scale} setScale={setScale} />
    </div>
  );
}

export default App;
