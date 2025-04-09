import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    onClick?: () => void;
}
export declare const Button: ({ children, ...props }: Props) => import("react").JSX.Element;
export {};
