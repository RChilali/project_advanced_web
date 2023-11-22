import React from "react";
import {CustomLink} from "../atoms/Link.tsx";

interface PosterLinkProps {
  to: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const PosterLink = ({children,to,disabled}: PosterLinkProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      event.preventDefault();
    }
  };

  return (
      <CustomLink to={to} onClick={handleClick}>
        {children}
      </CustomLink>
  );
};