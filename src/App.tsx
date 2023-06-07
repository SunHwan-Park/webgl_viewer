import { useState } from 'react';
import TopBar from './components/TopBar';
import ImageViewer from './components/ImageViewer';

function App() {
  const [scale, setScale] = useState(1);
  const [image, setImage] = useState({
    url: '',
    width: 0,
    height: 0,
  });
  return (
    <div style={{ width: '100wh', height: '100vh', overflow: 'hidden' }}>
      <TopBar scale={scale} setScale={setScale} image={image} setImage={setImage} />
      <ImageViewer scale={scale} setScale={setScale} image={image} />
    </div>
  );
}

export default App;
