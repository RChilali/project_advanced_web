import styled from "@emotion/styled";

interface MovieBackgroundImageProps {
  imgSrc: string;
}

export const MovieBackgroundImage = styled("div")(
    ({imgSrc}: MovieBackgroundImageProps) => ({
      backgroundImage: 'url("' + imgSrc + '");',
      filter: "blur(2em)",
      position: "absolute",
      zIndex: "-1",
      display: "flex",
      height: "100%",
      width: "100%",
      color: "black",
      backgroundSize: "cover",
    }));