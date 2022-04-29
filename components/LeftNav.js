import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import UserInfo from "./UserInfo";

export default function LeftNav() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Exchange Diary</h1>
        <UserInfo />
        <Link href="/about">
          <a>소개</a>
        </Link>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
