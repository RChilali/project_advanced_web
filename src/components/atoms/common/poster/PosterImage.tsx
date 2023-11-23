import styled from "@emotion/styled";
import {Size} from "../../../../enum/Size.ts";


interface PosterImageProps {
  size: Size;
  isHoverable: boolean;
  src: string;
}

export const PosterImage = styled("div")(
    ({size, isHoverable,src}: PosterImageProps) => ({
      display: "flex",
      width: size === Size.small ? "256px" : "300px",
      height: size === Size.small ? "384px" : "450px",
      flexShrink: 0,
      borderRadius: "5px",
      transition:"all 0.3s ease-in-out",
      justifyContent: "right",
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      ":hover": isHoverable ? {
        transform: "scale(1.05)",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
      } : {},
    })
);