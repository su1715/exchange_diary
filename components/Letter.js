import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState, newLetterState } from "../util/recoil";
import paperStyle from "../styles/Paper.module.css";
import { dateToString } from "../util/date";

export default function Letter() {
  const user = useRecoilValue(userState);
  const setNewLetter = useSetRecoilState(newLetterState);
  const [letter, setLetter] = useState({
    caller: user.id,
    receiver: "",
    text: ""
  });

  const onChange = ({ target }) => {
    setLetter(prev => ({ ...prev, [target.name]: target.value }));
  };

  const onClick = () => {
    setNewLetter(false);
  };

  const onSend = () => {
    if (letter.receiver !== "") {
      setLetter({
        caller: user.id,
        receiver: "",
        text: ""
      });
    }
  };

  return (
    <div className={paperStyle.paper}>
      <h1 className={paperStyle.textTitle}>{user.nickname}님의 일기</h1>
      <span className={paperStyle.textDate}>{dateToString(new Date())}</span>
      <hr className={paperStyle.hr} />
      <br />
      <div>
        <textarea
          autofocus
          name="text"
          className={paperStyle.textarea}
          value={letter.text}
          onChange={onChange}
        ></textarea>
      </div>
      <div className={paperStyle.buttons}>
        <button
          className={"button " + paperStyle.cancelButton}
          onClick={onClick}
        >
          취소
        </button>
        <button className="button" onClick={onSend}>
          작성
        </button>
      </div>
    </div>
  );
}
