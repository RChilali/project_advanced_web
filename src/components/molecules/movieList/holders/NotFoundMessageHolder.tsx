import {TextVariant} from "../../../../enum/TextVariant.ts";
import {Text} from "../../../atoms/common/text/Text.tsx";
import {NotFoundMessage} from "../../../atoms/common/notFoundMessage/NotFoundMessage.tsx";

export const NotFoundMessageHolder = () => {
    return (
        <NotFoundMessage>
            <Text textColor={"red"} variant={TextVariant.medium} isItalic={false} isMediaActive={false}>
                No movie found !
            </Text>
        </NotFoundMessage>
    );
};