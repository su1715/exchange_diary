import { useRecoilValue, useSetRecoilState } from "recoil";
import { allDiariesState, readPaperState } from "../util/recoil";
import { dateToString } from "../util/date";
import ModalLayout from "./layouts/ModalLayout";
import style from "../styles/ReadPaper.module.css";

export default function ReadPaper({ paperId }) {
  const allDiaries = useRecoilValue(allDiariesState);
  const setReadPaper = useSetRecoilState(readPaperState);
  const { caller_nickname, text, transmissionTime } = allDiaries.find(
    diary => diary.id === paperId
  );
  const onClick = () => {
    setReadPaper("");
  };
  return (
    <ModalLayout>
      <h1 className={style.textTitle}>{caller_nickname}님의 일기</h1>
      <span className={style.textDate}>
        {dateToString(new Date(transmissionTime))}
      </span>
      <hr className={style.hr} />
      <div className={style.textBox}>{text}</div>
      <div className={style.buttons}>
        <button className="buttonSpecial" onClick={onClick}>
          닫기
        </button>
      </div>
    </ModalLayout>
  );
}
