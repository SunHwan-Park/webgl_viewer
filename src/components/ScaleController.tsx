import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import Typography from '@mui/material/Typography';

const zoomOptions = [0.1, 0.2, 0.5, 1, 2, 3, 4];

export default function ScaleController({
  scale,
  setScale,
}: {
  scale: number;
  setScale: (v: number) => void;
}) {
  const onChange = (e: SelectChangeEvent<number>) => {
    setScale(e.target.value as number);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Typography variant="subtitle1">Scale</Typography>
      <Select
        size="small"
        autoWidth
        value={scale}
        renderValue={(v) => `${Math.round(v * 100)}%`}
        style={{ backgroundColor: 'white' }}
        onChange={onChange}
      >
        {zoomOptions.map((option) => {
          return (
            <MenuItem key={`ZOOM_OPTION_${option}`} value={option} selected={option === scale}>{`${
              option * 100
            }%`}</MenuItem>
          );
        })}
      </Select>
    </div>
  );
}
