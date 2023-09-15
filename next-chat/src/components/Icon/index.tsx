type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};
const Icon = ({ children, onClick }: Props) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {children}
    </div>
  );
};

export default Icon;
