import { Stage, Sprite } from '@pixi/react';
import { WheelEventHandler } from 'react';
import sample from '../assets/sample.jpeg';

const sampleImgSize = { width: 1000, height: 563 };

export default function ImageViewer({
  scale,
  setScale,
}: {
  scale: number;
  setScale: (v: number) => void;
}) {
  const stateSize = {
    width: sampleImgSize.width * scale,
    height: sampleImgSize.height * scale,
  };

  const onWheel: WheelEventHandler = (e) => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    const direction = e.deltaY < 0 ? 1 : -1;
    const newScale = Math.max(0.1, Math.min(4, scale + 0.1 * direction));
    setScale(newScale);
  };

  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100% - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        backgroundColor: 'gray',
      }}
      onWheel={onWheel}
    >
      <Stage width={stateSize.width} height={stateSize.height}>
        <Sprite image={sample} width={stateSize.width} height={stateSize.height} />
      </Stage>
    </div>
  );
}
