"use client";
import { Card, CardBody } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface MainProps {
  children?: ReactNode;
}
export const Main = ({ children }: MainProps) => {
  return (
    <main>
      <Card className="min-h-screen m-10">
        <CardBody className="p-10">{children}</CardBody>
      </Card>
    </main>
  );
};
