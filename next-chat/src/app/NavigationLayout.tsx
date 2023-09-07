"use client";
import Menu from "@/components/Menu";
import { usePathname } from "next/navigation";

type Props = {
  children?: React.ReactNode;
};

const noMenuLinks = ["/login", "/signup"];

const NavigationLayout = ({ children }: Props) => {
  const pathname = usePathname();

  const shouldRenderMenu = !noMenuLinks.includes(pathname);

  return (
    <div className="h-full w-full flex text-white">
      {shouldRenderMenu && (
        <div className="h-full w-[80px] z-10 relative">
          <Menu />
        </div>
      )}
      {children}
    </div>
  );
};

export default NavigationLayout;
