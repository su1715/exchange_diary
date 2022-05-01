import { useRecoilState } from "recoil";
import { newDiaryState } from "../util/recoil";
import styles from "../styles/Today.module.css";

export default function NoDiary() {
  const [newDiary, setNewDiary] = useRecoilState(newDiaryState);

  const onNewDiaryClick = () => {
    setNewDiary(true);
  };

  return (
    <div className={styles.noDiary}>
      <div className={styles.text}>아직 일기를 작성하지 않았습니다</div>
      <button
        className="buttonSpecial"
        onClick={onNewDiaryClick}
        disabled={newDiary}
      >
        일기 쓰기
      </button>
    </div>
  );
}
