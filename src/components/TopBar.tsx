import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ScaleController from './ScaleController';
import ImageUploader from './ImageUploader';

export default function TopBar({
  scale,
  setScale,
  image,
  setImage,
}: {
  scale: number;
  setScale: (v: number) => void;
  image: { url: string; width: number; height: number };
  setImage: (v: { url: string; width: number; height: number }) => void;
}) {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">WebGL Based ImageViewer</Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <ImageUploader image={image} setImage={setImage} />
          <ScaleController scale={scale} setScale={setScale} />
        </div>
      </Toolbar>
    </AppBar>
  );
}
