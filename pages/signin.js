import Head from "next/head";
import Link from "next/link";

export default function SignIn() {
  return (
    <div>
      <Head>
        <title>Exchange Diary</title>
      </Head>
      <h1>교환일기</h1>
      <form>
        <br />
        <input placeholder="아이디" />
        <br />
        <input type="password" placeholder="비밀번호" />
        <br />
        <button type="submit">로그인</button>
        <Link href="/signup">
          <button type="button">회원가입</button>
        </Link>
      </form>
    </div>
  );
}
