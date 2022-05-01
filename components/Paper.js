import { useRecoilValue, useSetRecoilState } from "recoil";
import { totalPapersState, paperState } from "../util/recoil";
import paperStyle from "../styles/Paper.module.css";
import { dateToString } from "../util/date";
import ModalLayout from "./layouts/ModalLayout";

export default function Paper({ paperId }) {
  const totalPapers = useRecoilValue(totalPapersState);
  const setPaper = useSetRecoilState(paperState);
  const { caller_nickname, text, transmissionTime } = totalPapers.find(
    paper => paper.id === paperId
  );
  const onClick = () => {
    setPaper("");
  };
  return (
    <ModalLayout>
      <h1 className={paperStyle.textTitle}>{caller_nickname}님의 일기</h1>
      <span className={paperStyle.textDate}>
        {dateToString(new Date(transmissionTime))}
      </span>
      <hr className={paperStyle.hr} />
      <div className={paperStyle.textBox}>{text}</div>
      <div className={paperStyle.buttons}>
        <button className="buttonSpecial" onClick={onClick}>
          닫기
        </button>
      </div>
    </ModalLayout>
  );
}
