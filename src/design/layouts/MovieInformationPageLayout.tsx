import {PropsWithChildren} from "react";
import {MovieBackgroundImage} from "../atoms/MovieBackgroundImage.tsx";
import {MovieInformationPage} from "../atoms/MovieInformationPage.tsx";
import {MovieInformationPageContent} from "../molecules/MovieInformationPageContent.tsx";

interface MovieInformationPageLayoutProps {
    isDarkTheme: boolean;
    movieId: string | undefined;
}

export const MovieInformationPageLayout = ({isDarkTheme, movieId}: PropsWithChildren<MovieInformationPageLayoutProps>) => {
    let imgSrc = "https://lumiere-a.akamaihd.net/v1/images/56245l11a_goat_philippines_apac_poster_1sht_e357e03a.jpeg";

    return (
        <MovieInformationPage>
            <MovieBackgroundImage imgSrc={imgSrc}></MovieBackgroundImage>
            <MovieInformationPageContent />
        </MovieInformationPage>
    );
};