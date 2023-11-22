import {BackButton} from "../atoms/BackButton.tsx";

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