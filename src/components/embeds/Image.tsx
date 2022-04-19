import React from "react";
import { ImageProps, default as NextImage } from "next/image";

function Image({ src, ...props }: ImageProps) {
  return (
    <NextImage
        {...props}
        src={`/images/${(src as string).replace(/^\//, "")}`}
        alt={props.alt as string ?? "Content image"}
        width={props.width as number ?? 300}
        height={props.height as number ?? 300}
    />
  );
}

export default Image;