import Link from "next/link";

const Login = () => {
  //   const { loggedIn, setIsLoggedIn } = useLoginStore();

  return (
    <div>
      <h1 className="text-blue-500">Login page</h1>
      <Link href="/chat">Go to chat</Link>
    </div>
  );
};

export default Login;
