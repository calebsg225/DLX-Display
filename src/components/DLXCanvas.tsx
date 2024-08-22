import { useEffect, useRef } from "react";
import DLXHTMLCanvas from "../modules/DLXHTMLCanvas";

const DLXCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const Canvas = new DLXHTMLCanvas(canvas);
      Canvas.createEmptyCanvas(160, 90);
    }
  }, []);

  return (
    <canvas ref={canvasRef}></canvas>
  )
}

export default DLXCanvas;