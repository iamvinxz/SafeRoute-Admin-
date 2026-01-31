"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({ children }: LoginButtonProps) => {
  const onClick = () => {
    console.log("LOGIN BUTTON CLICKED!!");
  };
  return <span onClick={onClick}>{children}</span>;
};
