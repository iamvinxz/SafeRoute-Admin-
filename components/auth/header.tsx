import Image from "next/image";
interface HeaderProps {
  label: string;
  title: string;
}

export const Header = ({ label, title }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Image src={"/icon.jpg"} alt="image" width={60} height={50} />
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
