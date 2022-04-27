import Head from "next/head";
import Link from "next/link";

export default function SignUp() {
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
        <input type="password" placeholder="비밀번호 확인" />
        <br />
        <input placeholder="이름" />
        <br />
        <input placeholder="닉네임" />
        <br />

        <button type="submit">회원가입</button>
        <Link href="/signin">
          <button type="button">취소</button>
        </Link>
      </form>
    </div>
  );
}
