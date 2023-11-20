import {CreditsImage} from "../atoms/images/CreditsImage.tsx";
import {CreditsHolder} from "../atoms/CreditsHolder.tsx";


interface MovieInformationCreditsProps {
  name: string;
  character: string;
  profile_path: string;
}

export const MovieInformationCredits = ({
                                          name,
                                          character,
                                          profile_path
                                        }: MovieInformationCreditsProps) => {
  return (
      <CreditsHolder>
        <CreditsImage
            src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + profile_path}/>
        <div>{name}</div>
        <div>{character}</div>
      </CreditsHolder>
  )
}