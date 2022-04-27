import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { fetchLogin } from "../util/auth";

export default function SignIn() {
  const [account, setAccount] = useState({ id: "", password: "" });

  const onChange = ({ target }) => {
    setAccount(prev => ({ ...prev, [target.name]: target.value }));
  };

  const onSignIn = async e => {
    e.preventDefault();
    console.log("account: ", account);
    const tokenObj = await fetchLogin(account);
    console.log("tokenObj:", tokenObj);
  };
  return (
    <div>
      <Head>
        <title>Exchange Diary</title>
      </Head>
      <h1>교환일기</h1>
      <form>
        <br />
        <input
          placeholder="아이디"
          name="id"
          onChange={onChange}
          value={account.id}
        />
        <br />
        <input
          name="password"
          type="password"
          onChange={onChange}
          placeholder="비밀번호"
          value={account.password}
        />
        <br />
        <button type="submit" onClick={onSignIn}>
          로그인
        </button>
        <Link href="/signup">
          <button type="button">회원가입</button>
        </Link>
      </form>
    </div>
  );
}
