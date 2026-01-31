import { usePathname } from "next/navigation";
import { House, MapPinned, Bell, Settings } from "lucide-react";

export const NavItems = () => {
  const pathname = usePathname();

  const isNavItemActive = (pathname: string, nav: string) => {
    return pathname.includes(nav);
  };

  return [
    {
      name: "Home",
      href: "/",
      icon: <House size={25} />,
      active: pathname === "/",
      position: "top",
    },
    {
      name: "Maps",
      href: "/maps",
      icon: <MapPinned size={25} />,
      active: isNavItemActive(pathname, "/maps"),
      position: "top",
    },
    {
      name: "Notification",
      href: "/notification",
      icon: <Bell size={25} />,
      active: isNavItemActive(pathname, "/notification"),
      position: "top",
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings size={25} />,
      active: isNavItemActive(pathname, "/settings"),
      position: "bottom",
    },
  ];
};
