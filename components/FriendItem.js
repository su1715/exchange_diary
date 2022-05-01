import { FiX } from "react-icons/fi";
import styles from "../styles/FriendList.module.css";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { friendsState } from "../util/recoil";

export default function FriendItem({ friend }) {
  const [isHover, setIsHover] = useState(false);
  const setFriends = useSetRecoilState(friendsState);
  const onMouseOver = () => {
    setIsHover(true);
  };
  const onMouseOut = () => {
    setIsHover(false);
  };
  const onDelete = () => {
    setFriends((prev) => prev.filter((f) => f.id !== friend.id));
  };
  return (
    <div
      className={styles.friend}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div>{friend.nickname}</div>
      <div className={isHover ? "" : styles.invisible} onClick={onDelete}>
        <FiX size={25} />
      </div>
    </div>
  );
}
