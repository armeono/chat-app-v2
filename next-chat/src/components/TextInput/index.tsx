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
        className="w-[80%] h-[80%] rounded-md bg-slate-700 outline-none px-2 resize-none"
        {...register("message")}
      />
      <button
        className="w-[20%] h-[80%] border rounded-md text-xl hover:bg-white  hover:text-black transition-all"
        type="submit"
      >
        Send
      </button>
    </>
  );
};

export default TextInput;
