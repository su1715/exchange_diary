import { useRecoilValue } from "recoil";
import { friendsState } from "../util/recoil";
import styles from "../styles/FriendList.module.css";
import { FiSettings } from "react-icons/fi";

export default function FriendList() {
  const friends = useRecoilValue(friendsState);
  return (
    <div className={`${styles.list} ${styles.left}`}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>친구 목록</h2>
        <FiSettings size={25} />
      </div>
      {friends.map(friend => (
        <div className={styles.friend} key={friend.id}>
          {friend.nickname}
        </div>
      ))}
      {/* {friendList.length > 0 ? friendList : "친구를 추가해볼까요?"} */}
    </div>
  );
}
