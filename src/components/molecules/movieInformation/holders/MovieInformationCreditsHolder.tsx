import {CreditsImage} from "../../../atoms/movieInformation/credits/CreditsImage.tsx";
import {Credits} from "../../../atoms/movieInformation/credits/Credits.tsx";
import {Text} from "../../../atoms/common/text/Text.tsx";
import {TextVariant} from "../../../../enum/TextVariant.ts";


interface MovieInformationCreditsProps {
  name: string;
  character: string;
  profile_path: string;
}

export const MovieInformationCreditsHolder = ({name, character, profile_path }: MovieInformationCreditsProps) => {
    if (profile_path == undefined) {
        profile_path = "/no_photo.jpg"
    }
    else
        profile_path = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + profile_path

    return (
      <Credits>
        <CreditsImage
            src={profile_path}/>
        <Text textColor={"white"} variant={TextVariant.small} isItalic={false} isMediaActive={false}>{name}</Text>
        <Text textColor={"#D6D3D1"} variant={TextVariant.small} isItalic={false} isMediaActive={false}>{character}</Text>
      </Credits>
  )
}