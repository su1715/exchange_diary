import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState, friendsState } from "../util/recoil";

export default function Letter() {
  const user = useRecoilValue(userState);
  const friends = useRecoilValue(friendsState);
  const [letter, setLetter] = useState({
    caller: user.id,
    receiver: "",
    text: ""
  });

  const onChange = ({ target }) => {
    setLetter(prev => ({ ...prev, [target.name]: target.value }));
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
    <div>
      <span>보내는 사람: {user.nickname}</span>
      <br />
      <span>
        받는 사람:{" "}
        <select name="receiver" value={letter.receiver} onChange={onChange}>
          <option value="">받을 사람을 골라주세요!</option>
          {friends.map(friend => (
            <option key={friend.id} value={friend.id}>
              {friend.nickname}
            </option>
          ))}
        </select>
      </span>
      <br />
      <textarea name="text" value={letter.text} onChange={onChange}></textarea>
      <button onClick={onSend}>전송</button>
    </div>
  );
}
