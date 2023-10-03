import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<any>;
  handleSubmit: any;
};

const TextInput = ({ register, handleSubmit }: Props) => {
  return (
    <>
      <textarea
        id="message-input"
        className="w-full h-[60%] rounded-md bg-slate-700 outline-none px-2 resize-none"
        {...register("message")}
      />
    </>
  );
};

export default TextInput;
