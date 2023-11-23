import styled from "@emotion/styled";

interface MovieListPageProps {
  pageColor?: string;
}

export const MovieListPage = styled("div")(
    ({pageColor}: MovieListPageProps) => ({
      backgroundColor: pageColor,
      height: "100%",
      minHeight: "100vh",
      color: "black",
      paddingBottom: "2rem",
    }));