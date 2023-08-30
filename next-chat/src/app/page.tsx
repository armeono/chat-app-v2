import Chat from "./chat/page";
import Login from "./login/page";

export default function Home() {
  const loggedIn = false;
  return <div>{loggedIn ? <Login /> : <Chat />}</div>;
}
