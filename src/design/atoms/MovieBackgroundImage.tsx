import styled from "@emotion/styled";

interface MovieBackgroundImageProps {
    imgSrc: string;
}

export const MovieBackgroundImage = styled("div")(
    ({imgSrc}: MovieBackgroundImageProps) => ({
        backgroundImage: 'url("' + imgSrc + '");',
        filter: "blur(2em)",
        position: "fixed",
        left: "0",
        right: "0",
        zIndex: "-1",
        display: "block",
        height: "100vh",
        width: "100%",
        color: "black",
    }));