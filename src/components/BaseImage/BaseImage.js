import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

function BaseImage(props) {
  const [image] = useImage(props.image.img);
  return <Image width={props.width} height={props.height} image={image} />;
}

export default BaseImage;
