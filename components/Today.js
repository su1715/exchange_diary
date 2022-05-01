import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dateState,
  isTodayState,
  myDiariesState,
  newDiaryState
} from "../util/recoil";
import DiaryItem from "./DiaryItem";
import { dateToString, isSameDate } from "../util/date";
import todayStyles from "../styles/Today.module.css";
import NoDiary from "./NoDiary";
import { useEffect } from "react";

export default function Today() {
  const date = useRecoilValue(dateState);
  const myDiaries = useRecoilValue(myDiariesState);
  const isToday = useRecoilValue(isTodayState);
  const setNewDiary = useSetRecoilState(newDiaryState);
  const todayDiary = myDiaries.find(diary =>
    isSameDate(diary.transmissionTime, date)
  );

  useEffect(() => {
    if (!isToday) setNewDiary(false);
  }, [isToday]);

  const renderByState = () => {
    if (todayDiary) return <DiaryItem diary={todayDiary} big />;
    if (isToday) return <NoDiary />;
  };

  return (
    <div className={todayStyles.today}>
      <h1 className={todayStyles.title}>{dateToString(date)}</h1>
      {renderByState()}
    </div>
  );
}
