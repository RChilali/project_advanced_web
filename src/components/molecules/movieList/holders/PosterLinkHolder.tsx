import React from "react";
import {PosterLink} from "../../../atoms/movieList/poster/PosterLink.tsx";

interface PosterLinkHolderProps {
  to: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const PosterLinkHolder = ({children,to,disabled}: PosterLinkHolderProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      event.preventDefault();
    }
  };

  return (
      <PosterLink to={to} onClick={handleClick}>
        {children}
      </PosterLink>
  );
};