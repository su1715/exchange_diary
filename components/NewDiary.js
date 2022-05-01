import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState, newDiaryState } from "../util/recoil";
import { dateToString } from "../util/date";
import paperStyle from "../styles/Paper.module.css";
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
      <h1 className={paperStyle.textTitle}>{user.nickname}님의 일기</h1>
      <span className={paperStyle.textDate}>{dateToString(new Date())}</span>
      <hr className={paperStyle.hr} />
      <br />
      <div>
        <textarea
          autofocus
          name="text"
          className={paperStyle.textarea}
          value={diary.text}
          onChange={onChange}
        ></textarea>
      </div>
      <div className={paperStyle.buttons}>
        <button
          className={"buttonSpecial " + paperStyle.cancelButton}
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
