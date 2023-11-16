import styled from "@emotion/styled";

interface TitleProps {
    textColor: string;
}

export const Title = styled("p")(
    ({textColor}: TitleProps) => ({
        font: "2.25rem Arial, ui-sans-serif",
        margin: "15px",
        color: textColor,
    }));