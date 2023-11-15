import {PropsWithChildren} from "react";
import {Title} from "../atoms/Title.tsx";

interface HeaderProps {
    title: string;
}

export const Header = ({title}: PropsWithChildren<HeaderProps>) => {
    return (
        <Title>{title}</Title>
    );
};