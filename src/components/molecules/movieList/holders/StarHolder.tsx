import {Star} from "../../../atoms/movieList/star/Star.tsx";

interface StarProps {
  isFavorite: boolean;
  onClick: () => void;
  setIsHover: (isHover: boolean) => void;
}

export const StarHolder = ({isFavorite, onClick,setIsHover}: StarProps) => {
  return (
      <Star isFavorite={isFavorite} onClick={onClick} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        {isFavorite ? '★' : '☆'}
      </Star>
  );
};