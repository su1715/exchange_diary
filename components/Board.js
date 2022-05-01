import { useSession } from "next-auth/react";
import UserInfo from "./UserInfo";
import MyCalendar from "./MyCalendar";
import Letter from "./Letter";
import { useRecoilValue } from "recoil";
import { newLetterState, isTodayState } from "../util/recoil";
import boardStyles from "../styles/Board.module.css";
import FriendList from "./FriendList";
import ReceiveList from "./ReceiveList";
import Today from "./Today";

export default function Board() {
  const { data: session } = useSession();
  const newLetter = useRecoilValue(newLetterState);
  const isToday = useRecoilValue(isTodayState);
  if (session) {
    return (
      <div className={boardStyles.board}>
        <UserInfo />
        <div className={boardStyles.calendar}>
          <MyCalendar />
          <Today />
        </div>
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
