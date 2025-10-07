import Draggable from "react-draggable";
import { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";

interface TokenProps {
  description: string;
  image: string;
}

export const Token: React.FC<TokenProps> = ({
  description,
  image
}) => {
  const [currentRotate, setCurrentRotate] = useState(0);

  const isDraggingRef = useRef(false);
  const nodeRef = useRef(null);

  const onDrag = () => {
    isDraggingRef.current = true;
  };

  const onStop = () => {
    if (!isDraggingRef.current) {
      setCurrentRotate(currentRotate + 90);
    }
    isDraggingRef.current = false;
  };

  return (
    <Draggable nodeRef={nodeRef} onStop={onStop} onDrag={onDrag}>
      <div ref={nodeRef}>
        <Avatar style={{transform: "rotate(" + currentRotate + "deg)"}} alt={description} src={image} />
      </div>
    </Draggable>
  );
};
