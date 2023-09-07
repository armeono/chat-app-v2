import { UseFormRegister } from "react-hook-form";

type Props = {
  height: string;
  width: string;
  register: UseFormRegister<any>;
  name: string;
  style?: string;
  placeholder?: string;
};
const Input = ({
  height,
  width,
  register,
  name,
  style,
  placeholder,
}: Props) => {
  return (
    <input
      type="text"
      className={`h-${height} w-${width} ${style}`}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};

export default Input;
