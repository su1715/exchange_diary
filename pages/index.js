import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
import { useSetRecoilState } from "recoil";
import {
  userState,
  friendsState,
  receiveLettersState,
  sendLettersState
} from "../util/recoil";
import { getData } from "../util/api";
import { useEffect } from "react";
import Board from "../components/Board";

export default function Home() {
  const { data: session } = useSession();
  const setUser = useSetRecoilState(userState);
  const setFriends = useSetRecoilState(friendsState);
  const setreceiveLetter = useSetRecoilState(receiveLettersState);
  const setSendLetter = useSetRecoilState(sendLettersState);

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
      {" "}
      <Board />{" "}
    </Layout>
  );
}
