import styled from "@emotion/styled";

interface MovieBackgroundImageProps {
  imgSrc: string;
}

export const BackgroundImage = styled("div")(
    ({imgSrc}: MovieBackgroundImageProps) => ({
      backgroundImage: 'url("' + imgSrc + '");',
      filter: "blur(2em)",
      position: "absolute",
      zIndex: "-1",
      display: "flex",
      height: "1610.75px",
      width: "100%",
      color: "black",
      top: "0",
      left: "0",
    }));