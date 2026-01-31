"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerTitle: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  headerTitle,
}: CardWrapperProps) => {
  return (
    <Card className="w-100 shadow-md">
      <CardHeader>
        <Header label={headerLabel} title={headerTitle} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
