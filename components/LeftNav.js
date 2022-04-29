import { useSession, signIn, signOut } from "next-auth/react";
import leftNavStyles from "../styles/LeftNav.module.css";
import Link from "next/link";
import UserInfo from "./UserInfo";

export default function LeftNav() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={leftNavStyles.leftLayout}>
        <h1 className={leftNavStyles.title}>교환일기</h1>
        <UserInfo />
        <Link href="/about">
          <a>소개</a>
        </Link>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
