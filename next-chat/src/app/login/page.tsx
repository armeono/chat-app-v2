import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h1 className="text-blue-500">Login page</h1>
      <Link href="/chat">Go to chat</Link>
    </div>
  );
}
