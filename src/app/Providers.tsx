import NavigationLayout from "./NavigationLayout";

type Props = {
  children?: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <NavigationLayout>{children}</NavigationLayout>;
};

export default Providers;
