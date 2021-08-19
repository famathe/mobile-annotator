import { useState } from "react";
import "./App.css";
import ActionMenu from "./components/ActionMenu/ActionMenu";
import Canvas from "./components/Canvas/Canvas";
import Description from "./components/Description/Description";
import { useClientRect } from "./hooks/UseClientRect";
import { description, images } from "./MockData";

function App() {
  const [containerCanvasRect, containerCanvasRef] = useClientRect();

  const [imageIndex, setImageIndex] = useState(0);

  function handleImageIndexChange(index) {
    if (index < 0 || index > images.length - 1) {
      return;
    }
    setImageIndex(index);
  }

  return (
    <div className="container">
      <div className="head">
        <Description
          title={description.title}
          tasks={description.tasks}
        ></Description>
      </div>
      <div className="body" ref={containerCanvasRef}>
        {containerCanvasRect !== null && (
          <Canvas
            width={containerCanvasRect.width}
            height={containerCanvasRect.height}
            images={images}
            imageIndex={imageIndex}
          ></Canvas>
        )}
      </div>
      <div className="foot">
        <ActionMenu
          onImageIndexChange={handleImageIndexChange}
          imageIndex={imageIndex}
        ></ActionMenu>
      </div>
    </div>
  );
}

export default App;
