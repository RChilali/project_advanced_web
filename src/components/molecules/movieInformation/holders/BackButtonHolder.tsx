import {BackButton} from "../../../atoms/movieInformation/BackButton.tsx";

export const BackButtonHolder = () => {
  return (
        <BackButton to={"/"}>
          <div className="material-symbols-outlined">
            arrow_back
          </div>
          <div>  Back</div>
        </BackButton>

  )
}