import { useRecoilValue } from "recoil";
import { friendsState } from "../util/recoil";
import Friend from "./Friend";
import styles from "../styles/FriendList.module.css";

export default function ReceiveList() {
  const friends = useRecoilValue(friendsState);
  const friendList = friends.map(friend => (
    <Friend key={friend.id} friend={friend} />
  ));
  return (
    <div className={`${styles.list} ${styles.right}`}>
      <h2 className={styles.title}>친구들의 일기</h2>
      {friendList.length > 0 ? friendList : "친구를 추가해볼까요?"}
    </div>
  );
}
