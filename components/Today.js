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
  const todayDiary = sendLetters.find(letter =>
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
      {todayDiary && (
        <div key={todayDiary.id}>
          <LetterItem letter={todayDiary} big />
        </div>
      )}
      {!todayDiary && isToday ? (
        <div className={todayStyles.noDiary}>
          <div className={todayStyles.text}>
            아직 일기를 작성하지 않았습니다
          </div>
          <button
            className="buttonSpecial"
            onClick={onNewLetterClick}
            disabled={newLetter}
          >
            일기 쓰기
          </button>
        </div>
      ) : null}
      {paper ? <Paper paperId={paper} /> : null}
    </div>
  );
}
