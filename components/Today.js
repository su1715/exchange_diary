import { useRecoilValue, useRecoilState } from "recoil";
import {
  dateState,
  newLetterState,
  isTodayState,
  sendLettersState,
  paperState
} from "../util/recoil";
import { useEffect } from "react";
import Paper from "./Paper";
import LetterItem from "./LetterItem";
import { dateToString, isSameDate } from "../util/date";
import todayStyles from "../styles/Today.module.css";

export default function Today() {
  const date = useRecoilValue(dateState);
  const sendLetters = useRecoilValue(sendLettersState);
  const [newLetter, setNewLetter] = useRecoilState(newLetterState);
  const isToday = useRecoilValue(isTodayState);
  const paper = useRecoilValue(paperState);
  const todayDiary = sendLetters.filter(letter =>
    isSameDate(letter.transmissionTime, date)
  );

  useEffect(() => {
    if (!isToday) setNewLetter(false);
  }, [isToday]);

  const onNewLetterClick = () => {
    setNewLetter(!newLetter);
  };

  return (
    <div className={todayStyles.today}>
      <h1 className={todayStyles.title}>{dateToString(date)}</h1>
      {todayDiary.length > 0 &&
        todayDiary.map(letter => (
          <div key={letter.id}>
            <LetterItem key={letter.id} letter={letter} />
          </div>
        ))}
      {todayDiary.length === 0 && isToday ? (
        <>
          <div>아직 일기를 작성하지 않았습니다.</div>
          <button className="button" onClick={onNewLetterClick}>
            {newLetter ? "취소" : "일기쓰기"}
          </button>
        </>
      ) : null}
      {paper ? <Paper paperId={paper} /> : null}
    </div>
  );
}
