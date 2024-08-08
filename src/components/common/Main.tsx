"use client";
import { Card, CardBody } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface MainProps {
  children?: ReactNode;
}
export const Main = ({ children }: MainProps) => {
  return <main className="min-h-screen m-10">{children}</main>;
};
