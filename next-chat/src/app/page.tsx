import Chat from "./chat/page";
import Login from "./login/page";

export default function Home() {
  const loggedIn = false;
  return (
    <div className="h-screen w-screen">{loggedIn ? <Chat /> : <Login />}</div>
  );
}
