import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { userState } from "../util/recoil";

export default function LeftNav() {
  const { data: session } = useSession();
  const user = useRecoilValue(userState);

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <div>name : {user.name}</div>
        <div>nickname : {user.nickname}</div>
        <div>level : {user.level}</div>
        <div>point : {user.point}</div>
        <Link href="/about">
          <a>소개</a>
        </Link>
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

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api/me");
    if (!response.ok) throw Error("네트워크 에러");
    return await response.json();
  } catch (e) {
    throw Error(e);
  }
}
