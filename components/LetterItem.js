import { useSetRecoilState, useRecoilValue } from "recoil";
import { paperState, userState } from "../util/recoil";

export default function LetterItem({ letter }) {
  const { id: letterId, transmissionTime, caller } = letter;
  const timeRemaining = dateFormatting(transmissionTime);
  const setPaperState = useSetRecoilState(paperState);
  const { id: userId } = useRecoilValue(userState);

  const onClick = () => {
    if (timeRemaining && userId !== caller) return;
    setPaperState(letterId);
  };
  return (
    <div onClick={onClick}>
      {timeRemaining ? timeRemaining : "일기가 도착했습니다!"}
    </div>
  );
}

function dateFormatting(time) {
  const sendDate = new Date(time);
  let getDate = sendDate;
  getDate.setHours(getDate.getHours() + 12);
  const nowDate = new Date();
  const elapsed = (getDate - nowDate) / 1000;
  const min = Math.floor(elapsed / 60) % 60;
  const hour = Math.floor(Math.floor(elapsed / 60) / 60);
  let format = hour > 0 ? `${hour}시간` : "";
  format += min > 0 ? `${min}분` : "";
  return format;
}
