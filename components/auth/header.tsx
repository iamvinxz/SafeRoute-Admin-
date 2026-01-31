import Image from "next/image";
interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Image src={"/icon.jpg"} alt="image" width={60} height={50} />
      <h1 className="text-2xl font-bold">Welcome to SafeRoute</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
