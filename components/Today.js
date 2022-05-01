import { useRecoilValue, useRecoilState } from "recoil";
import {
  dateState,
  newDiaryState,
  isTodayState,
  myDiariesState,
  paperState
} from "../util/recoil";
import { useEffect } from "react";
import Paper from "./Paper";
import DiaryItem from "./DiaryItem";
import { dateToString, isSameDate } from "../util/date";
import todayStyles from "../styles/Today.module.css";

export default function Today() {
  const date = useRecoilValue(dateState);
  const myDiaries = useRecoilValue(myDiariesState);
  const [newDiary, setNewDiary] = useRecoilState(newDiaryState);
  const isToday = useRecoilValue(isTodayState);
  const paper = useRecoilValue(paperState);
  const todayDiary = myDiaries.find(diary =>
    isSameDate(diary.transmissionTime, date)
  );

  useEffect(() => {
    if (!isToday) setNewDiary(false);
  }, [isToday]);

  const onNewDiaryClick = () => {
    setNewDiary(!newDiary);
  };

  return (
    <div className={todayStyles.today}>
      <h1 className={todayStyles.title}>{dateToString(date)}</h1>
      {todayDiary && (
        <div key={todayDiary.id}>
          <DiaryItem diary={todayDiary} big />
        </div>
      )}
      {!todayDiary && isToday ? (
        <div className={todayStyles.noDiary}>
          <div className={todayStyles.text}>
            아직 일기를 작성하지 않았습니다
          </div>
          <button
            className="buttonSpecial"
            onClick={onNewDiaryClick}
            disabled={newDiary}
          >
            일기 쓰기
          </button>
        </div>
      ) : null}
      {paper ? <Paper paperId={paper} /> : null}
    </div>
  );
}
