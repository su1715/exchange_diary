import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Layout>
          <div>Hello!</div>
        </Layout>
      </>
    );
  }
  return (
    <>
      <Layout>
        <div>SignIn Plz...</div>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/me", {
//     headers: { Accept: "application/json" }
//   });
//   console.log(res);
//   if (!res.ok) console.log("error");
//   const user = await res.json();

//   return { props: { user } };
// }
