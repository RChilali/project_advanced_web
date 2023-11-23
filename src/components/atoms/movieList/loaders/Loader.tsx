import styled from "@emotion/styled";

export const Loader = styled("div")({
    border: "10px solid grey",
    borderTop: "10px solid white",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 2s linear infinite",
    position: "relative",
    justifyContent: "center",
    margin: "auto",
    marginTop: "30vh",
    "@keyframes spin": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
    }
});