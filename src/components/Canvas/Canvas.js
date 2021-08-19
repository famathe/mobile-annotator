import { useEffect } from "react";
import { Layer, Stage } from "react-konva";
import BaseImage from "../BaseImage/BaseImage";

function Canvas(props) {
  const stageSize = {
    width: props.width,
    height: props.width / 1.778,
  };

  return (
    <Stage width={stageSize.width} height={stageSize.height}>
      <Layer>
        <BaseImage
          width={stageSize.width}
          height={stageSize.height}
          image={props.images[props.imageIndex]}
        ></BaseImage>
      </Layer>
    </Stage>
  );
}

export default Canvas;
