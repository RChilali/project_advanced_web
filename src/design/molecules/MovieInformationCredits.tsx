import {CreditsImage} from "../atoms/images/CreditsImage.tsx";
import {CreditsHolder} from "../atoms/CreditsHolder.tsx";
import {Text} from "../atoms/Text.tsx";
import {TextVariant} from "../../enum/TextVariant.ts";


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
        <Text textColor={"white"} variant={TextVariant.small} isItalic={false} isMediaActive={false}>{name}</Text>
        <Text textColor={"#D6D3D1"} variant={TextVariant.small} isItalic={false} isMediaActive={false}>{character}</Text>
      </CreditsHolder>
  )
}