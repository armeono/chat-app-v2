"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

type Props = {};

type LoginFormValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormValues> = async (
    formData: LoginFormValues
  ) => {
    console.log(formData);

    try {
      const data = await signIn("credentials", {
        username: formData.username,
        password: formData.password,
        redirect: false,
      });

      console.log(data);

      // await signIn("credentials", {
      //   username: formData.username,
      //   password: formData.password,
      //   redirect: false,
      //   callbackUrl: `${window.location.origin}`,
      // }).then((res) => {
      //   if (!res) throw new Error("There has been an error logging in!");

      //   if (res.error) {
      //     console.log(res.error);
      //   }
      // });
    } catch (err) {
      console.log(err);
    }

    // router.push("/chat");
  };

  const inputStyles =
    "w-2/3 bg-transparent border border-white rounded-md indent-4 outline-none";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center gap-14"
    >
      <div className="w-full flex flex-col items-center gap-8">
        <Input
          height="10"
          width="full"
          name="username"
          register={register}
          style={inputStyles}
          placeholder="Username"
        />
        <Input
          height="10"
          width="full"
          name="password"
          register={register}
          style={inputStyles}
          placeholder="Password"
        />
      </div>

      <div className="w-full flex flex-col gap-4">
        <button
          type="submit"
          className="w-full h-10 border border-white rounded-md hover:bg-white hover:text-black transition-all"
        >
          Login
        </button>
        <button className="text-slate-500 hover:underline transition-all">
          No account? Click here to sign up!
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
