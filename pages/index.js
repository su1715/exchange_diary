import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
import MyCalendar from "../components/MyCalendar";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  userState,
  friendsState,
  newLetterState,
  isTodayState,
  receiveLettersState,
  sendLettersState
} from "../util/recoil";
import { getData } from "../util/api";
import { useEffect } from "react";
import Board from "../components/Board";
import Letter from "../components/Letter";
import UserInfo from "../components/UserInfo";

export default function Home() {
  const { data: session } = useSession();
  const setUser = useSetRecoilState(userState);
  const setFriends = useSetRecoilState(friendsState);
  const setreceiveLetter = useSetRecoilState(receiveLettersState);
  const setSendLetter = useSetRecoilState(sendLettersState);
  const newLetter = useRecoilValue(newLetterState);
  const isToday = useRecoilValue(isTodayState);

  useEffect(() => {
    async function fetchData() {
      const user = await getData("/api/me");
      const { friends } = await getData("/api/me/friends");
      const { letters: receiveLetters } = await getData(
        "/api/me/letters/receive"
      );
      const { letters: sendLetters } = await getData("/api/me/letters/send");
      setUser(user);
      setFriends(friends);
      setreceiveLetter(receiveLetters);
      setSendLetter(sendLetters);
    }
    if (session) {
      fetchData();
    }
  }, [session]);
  return (
    <Layout>
      <div>
        <h1>추억의 교환일기</h1>
        <UserInfo />
        {session ? (
          <>
            <MyCalendar />
            <Board />
            {newLetter && isToday ? <Letter /> : null}
          </>
        ) : (
          <div>SignIn Plz...</div>
        )}
      </div>
    </Layout>
  );
}

//todo : Board => SendList
// index : >> Board로 세분화
