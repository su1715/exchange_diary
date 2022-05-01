import { signIn } from "next-auth/react";
export default function SigninInfo() {
  return (
    <>
      로그인이 필요합니다{" "}
      <button className="button" onClick={signIn}>
        Sign in
      </button>
    </>
  );
}
