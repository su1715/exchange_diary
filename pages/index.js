import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
import MyCalendar from "../components/MyCalendar";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  userState,
  friendsState,
  dateState,
  newLetterState,
  isTodayState,
  recieveLettersState,
  sendLettersState
} from "../util/recoil";
import { getData } from "../util/api";
import { useEffect } from "react";
import Board from "../components/Board";
import Letter from "../components/Letter";

export default function Home() {
  const { data: session } = useSession();
  const setUser = useSetRecoilState(userState);
  const setFriends = useSetRecoilState(friendsState);
  const setRecieveLetter = useSetRecoilState(recieveLettersState);
  const setSendLetter = useSetRecoilState(sendLettersState);
  const newLetter = useRecoilValue(newLetterState);
  const isToday = useRecoilValue(isTodayState);

  useEffect(() => {
    async function fetchData() {
      const user = await getData("/api/me");
      const { friends } = await getData("/api/me/friends");
      const { letters: recieveLetters } = await getData(
        "/api/me/letter/recieve"
      );
      const { letters: sendLetters } = await getData("/api/me/letter/send");
      setUser(user);
      setFriends(friends);
      setRecieveLetter(recieveLetters);
      setSendLetter(sendLetters);
      console.log(sendLetters);
    }
    if (session) {
      fetchData();
    }
  }, [session]);

  if (session) {
    return (
      <>
        <Layout>
          <div>
            <MyCalendar />
            <Board />
            {newLetter && isToday ? <Letter /> : null}
          </div>
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
