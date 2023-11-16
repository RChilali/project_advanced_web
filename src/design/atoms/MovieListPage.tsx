import styled from "@emotion/styled";

interface MovieListPageProps {
    pageColor?: string;
}

export const MovieListPage = styled("div")(
    ({pageColor}: MovieListPageProps) => ({
        backgroundColor: pageColor,
        height: "100vh",
        width: "100wh",
        color: "black",
    }));