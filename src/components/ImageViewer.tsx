import { Stage, Sprite } from '@pixi/react';
import { WheelEventHandler } from 'react';

export default function ImageViewer({
  scale,
  setScale,
  image,
}: {
  scale: number;
  setScale: (v: number) => void;
  image: {
    url: string;
    width: number;
    height: number;
  };
}) {
  const stateSize = {
    width: image.width * scale,
    height: image.height * scale,
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
        {image.url && (
          <Sprite image={image.url} width={stateSize.width} height={stateSize.height} />
        )}
      </Stage>
    </div>
  );
}
