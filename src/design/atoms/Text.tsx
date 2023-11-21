import styled from "@emotion/styled";
import {TextVariant} from "../../enum/TextVariant.ts";

interface TitleProps {
  textColor: string;
  isItalic: boolean;
  isMediaActive: boolean;
  variant: TextVariant;
}

const getFontStyle = (variant: TextVariant) => {
  switch(variant) {
    case TextVariant.extraLarge:
      return { fontSize: "2.25rem", lineHeight: "2.5rem", flexShrink: 0, whiteSpace: "nowrap" as 'nowrap' };
    case TextVariant.large:
      return { fontSize: "1.875rem", lineHeight: "2.25rem" };
    case TextVariant.medium:
      return { fontSize: "1rem", lineHeight: "1.5rem" };
    case TextVariant.small:
      return { fontSize: "0.875rem", lineHeight: "1.25rem" };
    default:
      return { fontSize: "1rem", lineHeight: "1.5rem" };
  }
}

export const Text = styled("div")(({textColor, isItalic, isMediaActive, variant}: TitleProps) => {
  const { fontSize, lineHeight, flexShrink,whiteSpace } = getFontStyle(variant);
  return {
    display: "flex",
    font: `${fontSize} Arial, ui-sans-serif`,
    lineHeight,
    flexShrink,
    whiteSpace,
    fontStyle: isItalic ? "italic" : "normal",
    color: textColor,
    "@media (max-width: 640px)": isMediaActive ? {
      font: "1.5rem Arial, ui-sans-serif",
    } : {},
  }
});