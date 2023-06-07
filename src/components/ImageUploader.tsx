import { Input } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ChangeEventHandler } from 'react';
import loadImage from 'blueimp-load-image';

export default function ImageUploader({
  image,
  setImage,
}: {
  image: { url: string; width: number; height: number };
  setImage: (v: { url: string; width: number; height: number }) => void;
}) {
  const onChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    console.log(e);
    const file = e.target.files?.[0];
    if (!file) return;
    const data = await loadImage(file, { canvas: true });
    if (!data) return;
    const { image, originalWidth, originalHeight } = data;
    const url = (image as HTMLCanvasElement).toDataURL();
    setImage({
      url: url,
      width: originalWidth || 0,
      height: originalHeight || 0,
    });
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Typography variant="subtitle1">{`Image${
        image.url ? `(${image.width} x ${image.height} px)` : ''
      }`}</Typography>
      <Input
        inputProps={{
          type: 'file',
          accept: 'image/*',
        }}
        style={{ backgroundColor: 'white' }}
        onChange={onChange}
      />
    </div>
  );
}
