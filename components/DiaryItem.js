import { useSetRecoilState, useRecoilValue } from "recoil";
import { readPaperState, userState } from "../util/recoil";
import { dateFormatting } from "../util/date";
import styles from "../styles/DiaryItem.module.css";

export default function DiaryItem({ diary, big }) {
  const { id: diaryId, transmissionTime, caller } = diary;
  const timeRemaining = dateFormatting(transmissionTime);
  const setReadPaperState = useSetRecoilState(readPaperState);
  const { id: userId } = useRecoilValue(userState);

  const onClick = () => {
    if (timeRemaining && userId !== caller) return;
    setReadPaperState(diaryId);
  };

  if (big) return <BigItem timeRemaining={timeRemaining} onClick={onClick} />;
  return <SmallItem timeRemaining={timeRemaining} onClick={onClick} />;
}

function BigItem({ timeRemaining, onClick }) {
  return (
    <div className={styles.item}>
      {timeRemaining ? (
        <>
          <div>일기가 전송중입니다</div>
          <div>{timeRemaining} 후에 도착합니다</div>
        </>
      ) : (
        <div>일기가 전송되었습니다!</div>
      )}
      <button className="buttonSpecial" onClick={() => onClick(false)}>
        일기 보기
      </button>
    </div>
  );
}

function SmallItem({ timeRemaining, onClick }) {
  return (
    <div onClick={onClick}>
      {timeRemaining ? (
        <div>일기가 전송중입니다 -{timeRemaining}-</div>
      ) : (
        <div>일기가 도착했습니다!</div>
      )}
    </div>
  );
}
