import styled from "@emotion/styled";

interface TitleProps {
    textColor: string;
}

export const Text = styled("p")(({textColor}: TitleProps) => ({
    font: "2.25rem Arial, ui-sans-serif",
    margin: "0",
    paddingLeft: "15px",
    color: textColor,
    "@media (max-width: 640px)": {
        font: "1.5rem Arial, ui-sans-serif",
    },
}));