import { useRecoilValue, useRecoilState } from "recoil";
import {
  dateState,
  newLetterState,
  isTodayState,
  sendLettersState,
  paperState,
  friendsState
} from "../util/recoil";
import { useEffect } from "react";
import Paper from "./Paper";
import LetterItem from "./LetterItem";

export default function Board() {
  const date = useRecoilValue(dateState);
  const sendLetters = useRecoilValue(sendLettersState);
  const [newLetter, setNewLetter] = useRecoilState(newLetterState);
  const isToday = useRecoilValue(isTodayState);
  const paper = useRecoilValue(paperState);
  const friends = useRecoilValue(friendsState);

  useEffect(() => {
    if (!isToday) setNewLetter(false);
  }, [isToday]);

  const onNewLetterClick = () => {
    setNewLetter(!newLetter);
  };

  return (
    <div>
      <h1>{dateToString(date)}</h1>
      <h3>보낸 편지 목록</h3>
      {sendLetters
        .filter(letter => isSameDate(letter.transmissionTime, date))
        .map(letter => (
          <div>
            보낸이 :{" "}
            {friends.find(friend => friend.id === letter.receiver).nickname}
            <LetterItem key={letter.id} letter={letter} />
          </div>
        ))}
      {isToday ? (
        <button onClick={onNewLetterClick}>
          {newLetter ? "취소" : "새 편지 보내기"}
        </button>
      ) : null}
      {paper ? <Paper paperId={paper} /> : null}
    </div>
  );
}

function isSameDate(date1, date2) {
  date1 = new Date(date1);
  if (date1.getFullYear() !== date2.getFullYear()) return false;
  if (date1.getMonth() !== date2.getMonth()) return false;
  if (date1.getDate() !== date2.getDate()) return false;
  return true;
}

function dateToString(dateObj) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = days[dateObj.getDay()];

  return `${year}년 ${month}월 ${date}일 ${day}요일`;
}
