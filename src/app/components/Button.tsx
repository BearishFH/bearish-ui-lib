'use client';

import { Button as MuiButton } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <MuiButton
      className="!bg-gradient-to-r !from-pink-500 !via-red-500 !to-yellow-500 !text-white !px-8 !py-4 !text-lg !rounded-full !shadow-2xl !font-extrabold !transition-transform !duration-300 !ease-in-out hover:!scale-110 active:!scale-95 focus:!ring-4 focus:!ring-yellow-300"
      {...props}
    >
      {children} 
    </MuiButton>
  );
};
