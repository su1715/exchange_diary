import { useSession } from "next-auth/react";
import { useRecoilValue } from "recoil";
import {
  newDiaryState,
  isTodayState,
  readPaperState,
  settingFriendState
} from "../util/recoil";
import UserInfo from "./UserInfo";
import MyCalendar from "./MyCalendar";
import NewDiary from "./NewDiary";
import boardStyles from "../styles/Board.module.css";
import FriendList from "./FriendList";
import ReceiveList from "./ReceiveList";
import Today from "./Today";
import SigninInfo from "./SigninInfo";
import InfoLayout from "./layouts/InfoLayout";
import MainLayout from "./layouts/MainLayout";
import ReadPaper from "./ReadPaper";
import SettingFriend from "./SettingFriend";

export default function Board() {
  const { data: session } = useSession();
  const newDiary = useRecoilValue(newDiaryState);
  const isToday = useRecoilValue(isTodayState);
  const readPaper = useRecoilValue(readPaperState);

  if (session) {
    return (
      <div className={boardStyles.board}>
        <InfoLayout>
          <UserInfo />
        </InfoLayout>
        <MainLayout>
          <MyCalendar />
          <Today />
        </MainLayout>
        <div className={boardStyles.listsWrapper}>
          <FriendList />
          <ReceiveList />
        </div>
        {newDiary && isToday ? <NewDiary /> : null}
        {readPaper ? <ReadPaper paperId={readPaper} /> : null}
        {settingFriendState ? <SettingFriend /> : null}
      </div>
    );
  }
  return (
    <div className={boardStyles.board}>
      <InfoLayout>
        <SigninInfo />
      </InfoLayout>
    </div>
  );
}
