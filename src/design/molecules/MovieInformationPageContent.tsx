import {PropsWithChildren} from "react";
import {MoviePoster} from "../atoms/MoviePoster.tsx";
import {MovieCapture} from "../atoms/MovieCapture.tsx";
import {MovieHeadInformationLayout} from "../layouts/MovieHeadInformationLayout.tsx";
import {MovieHeadTextLayout} from "../layouts/MovieHeadTextLayout.tsx";

interface MovieInformationPageContentProps {

}

export const MovieInformationPageContent = ({}: PropsWithChildren<MovieInformationPageContentProps>) => {
    return (
        <div>
            <MovieHeadInformationLayout>
                <MoviePoster
                    src={"https://lumiere-a.akamaihd.net/v1/images/56245l11a_goat_philippines_apac_poster_1sht_e357e03a.jpeg"}
                    alt={"alt"}>
                </MoviePoster>
                <MovieHeadTextLayout>
                    <p>The Marvels</p>
                    <p>Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken
                        revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the
                        burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to
                        a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala
                        Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica
                        Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the
                        universe.</p>
                    <p>Action, Adventure, Science Fiction</p>
                    <p>8 nov. 2023</p>
                </MovieHeadTextLayout>
            </MovieHeadInformationLayout>
            <p>Credits</p>
            <p>Images</p>
            <MovieCapture/>
        </div>
    );
};