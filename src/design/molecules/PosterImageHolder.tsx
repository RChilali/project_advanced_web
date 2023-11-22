import {Size} from "../../enum/Size.ts";
import {PosterImage} from "../atoms/images/PosterImage.tsx";
import  {ReactNode} from 'react';

interface PosterImageProps {
  size: Size;
  isHoverable: boolean;
  src: string;
  children?: ReactNode;
}

export const PosterImageHolder = ({
                                    size,
                                    isHoverable,
                                    src,
                                    children
                                  }: PosterImageProps) => {
  return (
      <PosterImage size={size} isHoverable={isHoverable} src={src}>
        {children}
      </PosterImage>
  );
};