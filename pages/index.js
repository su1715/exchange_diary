import { useSession } from "next-auth/react";
import Layout from "../components/layouts/Layout";
import { useSetRecoilState } from "recoil";
import {
  userState,
  friendsState,
  friendDiariesState,
  myDiariesState
} from "../util/recoil";
import { getData } from "../util/api";
import { useEffect } from "react";
import Board from "../components/Board";

export default function Home() {
  const { data: session } = useSession();
  const setUser = useSetRecoilState(userState);
  const setFriends = useSetRecoilState(friendsState);
  const setFriendDiaries = useSetRecoilState(friendDiariesState);
  const setMyDiaries = useSetRecoilState(myDiariesState);

  useEffect(() => {
    async function fetchData() {
      const user = await getData("/api/me");
      const { friends } = await getData("/api/me/friends");
      const { diaries: friendDiariesState } = await getData(
        "/api/me/diaries/receive"
      );
      const { diaries: myDiariesState } = await getData("/api/me/diaries/send");
      setUser(user);
      setFriends(friends);
      setFriendDiaries(friendDiariesState);
      setMyDiaries(myDiariesState);
    }
    if (session) {
      fetchData();
    }
  }, [session]);
  return (
    <Layout>
      <Board />
    </Layout>
  );
}
