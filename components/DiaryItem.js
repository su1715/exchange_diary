import { useSetRecoilState, useRecoilValue } from "recoil";
import { paperState, userState } from "../util/recoil";
import { dateFormatting } from "../util/date";
import itemStyles from "../styles/DiaryItem.module.css";

export default function DiaryItem({ diary, big }) {
  const { id: diaryId, transmissionTime, caller } = diary;
  const timeRemaining = dateFormatting(transmissionTime);
  const setPaperState = useSetRecoilState(paperState);
  const { id: userId } = useRecoilValue(userState);

  const onClick = check => {
    if (check) return;
    if (timeRemaining && userId !== caller) return;
    setPaperState(diaryId);
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
