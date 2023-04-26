import { Stage, Sprite } from '@pixi/react';
import sample from '../assets/sample.jpeg';

export default function ImageViewer() {
  return (
    <Stage width={1200} height={700}>
      <Sprite image={sample} width={1000} height={563} x={100} y={70} />
    </Stage>
  );
}
