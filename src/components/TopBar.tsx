import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ScaleController from './ScaleController';

export default function TopBar({
  scale,
  setScale,
}: {
  scale: number;
  setScale: (v: number) => void;
}) {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">WebGL Based ImageViewer</Typography>
        <ScaleController scale={scale} setScale={setScale} />
      </Toolbar>
    </AppBar>
  );
}
