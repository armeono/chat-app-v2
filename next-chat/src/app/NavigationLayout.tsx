import Menu from "@/components/menu";

type Props = {
  children?: React.ReactNode;
};

const NavigationLayout = ({ children }: Props) => {
  return (
    <div className="h-full w-full flex text-white">
      <div className="h-full w-full z-10 relative">
        <Menu />
      </div>
      {children}
    </div>
  );
};

export default NavigationLayout;
