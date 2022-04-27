import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ user }) {
  return (
    <div
      className={styles.container}
    >{`이름: ${user.name} 닉네임: ${user.nickname}`}</div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/me", {
    headers: { Accept: "application/json" }
  });
  console.log(res);
  if (!res.ok) console.log("error");
  const user = await res.json();

  return { props: { user } };
}
