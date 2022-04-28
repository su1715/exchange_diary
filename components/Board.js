import { useRecoilValue, useRecoilState } from "recoil";
import {
  dateState,
  newLetterState,
  isTodayState,
  sendLettersState
} from "../util/recoil";

export default function Board() {
  const date = useRecoilValue(dateState);
  const sendLetters = useRecoilValue(sendLettersState);
  const [newLetter, setNewLetter] = useRecoilState(newLetterState);
  const isToday = useRecoilValue(isTodayState);

  const onClick = () => {
    setNewLetter(!newLetter);
  };
  return (
    <div>
      <h1>{dateToString(date)}</h1>
      <h3>보낸 편지 목록</h3>
      {sendLetters.map(letter => (
        <div id={letter.id}>
          <span>받는이 :{letter.reciever}</span>
        </div>
      ))}
      {isToday ? (
        <button onClick={onClick}>
          {newLetter ? "취소" : "새 편지 보내기"}
        </button>
      ) : null}
    </div>
  );
}

function dateToString(dateObj) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = days[dateObj.getDay()];

  return `${year}년 ${month}월 ${date}일 ${day}요일`;
}
