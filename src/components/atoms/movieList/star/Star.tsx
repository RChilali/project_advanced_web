import styled from "@emotion/styled";

interface StarProps {
  isFavorite?: boolean;
}

export const Star = styled("div")(({isFavorite}: StarProps) => ({
  display: "flex",
  color: isFavorite ? 'gold' : 'black',
  fontSize: '40px',
  backgroundColor: 'white',
  borderRadius: "50%",
  width: "40px",
  height: '40px',
  margin: "5px",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "5px",
}));