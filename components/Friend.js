import DiaryItem from "./DiaryItem";
import { useRecoilValue } from "recoil";
import { friendDiariesState, dateState } from "../util/recoil";
import friendStyles from "../styles/Friend.module.css";
import { isSameDate } from "../util/date";

export default function Friend({ friend }) {
  const date = useRecoilValue(dateState);
  const friendDiaries = useRecoilValue(friendDiariesState);
  const friendDiariyList = friendDiaries.filter(
    diary => diary.caller === friend.id
  );
  const todayDiaryList = friendDiariyList.filter(diary =>
    isSameDate(diary.transmissionTime, date)
  );
  const diaryItemList = todayDiaryList.map(diary => (
    <DiaryItem key={diary.id} diary={diary} />
  ));
  return (
    <>
      {diaryItemList.length > 0 ? (
        <div className={friendStyles.friend}>
          <div className={friendStyles.nickname}>{friend.nickname}</div>
          <div className={friendStyles.item}>{diaryItemList}</div>
        </div>
      ) : null}
    </>
  );
}
