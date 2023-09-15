type Props = {
  height: string;
  width: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  children: React.ReactNode;
};

export const PopOver = ({
  height,
  width,
  right,
  top,
  left,
  bottom,
  children,
}: Props) => {
  return (
    <div
      className={`${height} ${width} absolute bg-blue-950 z-12 ${top} ${left} ${bottom} ${right}
      flex flex-col-reverse overflow-hidden justify-center items-center rounded-md 
      `}
    >
      {children}
    </div>
  );
};
