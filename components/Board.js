import { useSession } from "next-auth/react";
import UserInfo from "./UserInfo";
import MyCalendar from "./MyCalendar";
import SendList from "./SendList";
import Letter from "./Letter";
import { useRecoilValue } from "recoil";
import { newLetterState, isTodayState } from "../util/recoil";
import boardStyles from "../styles/Board.module.css";
import FriendList from "./FriendList";
import ReceiveList from "./ReceiveList";

export default function Board() {
  const { data: session } = useSession();
  const newLetter = useRecoilValue(newLetterState);
  const isToday = useRecoilValue(isTodayState);
  if (session) {
    return (
      <div className={boardStyles.board}>
        <UserInfo />
        <MyCalendar />
        {/* <SendList /> */}
        <div className={boardStyles.listsWrapper}>
          <FriendList />
          <ReceiveList />
        </div>
        {newLetter && isToday ? <Letter /> : null}
      </div>
    );
  }
  return (
    <div className={boardStyles.board}>
      <UserInfo />
    </div>
  );
}
