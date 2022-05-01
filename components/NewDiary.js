import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState, newDiaryState } from "../util/recoil";
import { dateToString } from "../util/date";
import style from "../styles/ReadPaper.module.css";
import ModalLayout from "./layouts/ModalLayout";

export default function NewDiary() {
  const user = useRecoilValue(userState);
  const setNewDiary = useSetRecoilState(newDiaryState);
  const [diary, setDiary] = useState({
    caller: user.id,
    receiver: "",
    text: ""
  });

  const onChange = ({ target }) => {
    setDiary(prev => ({ ...prev, [target.name]: target.value }));
  };

  const onClick = () => {
    setNewDiary(false);
  };

  const onSend = () => {
    if (diary.receiver !== "") {
      setDiary({
        caller: user.id,
        receiver: "",
        text: ""
      });
    }
  };

  return (
    <ModalLayout>
      <h1 className={style.textTitle}>{user.nickname}님의 일기</h1>
      <span className={style.textDate}>{dateToString(new Date())}</span>
      <hr className={style.hr} />
      <br />
      <div>
        <textarea
          autofocus
          name="text"
          className={style.textarea}
          value={diary.text}
          onChange={onChange}
        ></textarea>
      </div>
      <div className={style.buttons}>
        <button
          className={"buttonSpecial " + style.cancelButton}
          onClick={onClick}
        >
          취소
        </button>
        <button className="buttonSpecial" onClick={onSend}>
          작성
        </button>
      </div>
    </ModalLayout>
  );
}
