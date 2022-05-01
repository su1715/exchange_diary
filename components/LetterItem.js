import { useSetRecoilState, useRecoilValue } from "recoil";
import { paperState, userState } from "../util/recoil";
import itemStyles from "../styles/LetterItem.module.css";

export default function LetterItem({ letter, big }) {
  const { id: letterId, transmissionTime, caller } = letter;
  const timeRemaining = dateFormatting(transmissionTime);
  const setPaperState = useSetRecoilState(paperState);
  const { id: userId } = useRecoilValue(userState);

  const onClick = check => {
    console.log("check:", check);
    if (check) return;
    if (timeRemaining && userId !== caller) return;
    setPaperState(letterId);
  };
  return (
    <div onClick={() => onClick(big)} className={big ? itemStyles.bigText : ""}>
      {timeRemaining ? (
        <>
          <div>일기가 전송중입니다</div>
          <div>{timeRemaining} 후에 도착합니다</div>
        </>
      ) : (
        "일기가 도착했습니다!"
      )}
      {big ? (
        <button className="button" onClick={() => onClick(false)}>
          {" "}
          일기 보기{" "}
        </button>
      ) : null}
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
