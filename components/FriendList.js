import { useRecoilValue, useSetRecoilState } from "recoil";
import { friendsState, searchFriendState } from "../util/recoil";
import styles from "../styles/FriendList.module.css";
import { FiSearch } from "react-icons/fi";

export default function FriendList() {
  const friends = useRecoilValue(friendsState);
  const setSearchFriend = useSetRecoilState(searchFriendState);
  const onSettingClick = () => {
    setSearchFriend(true);
  };
  return (
    <div className={`${styles.list} ${styles.left}`}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>친구 목록</h2>
        <FiSearch size={25} onClick={onSettingClick} />
      </div>
      {friends.map((friend) => (
        <div className={styles.friend} key={friend.id}>
          {friend.nickname}
        </div>
      ))}
      {/* {friendList.length > 0 ? friendList : "설정 버튼을 눌러 친구를 추가해보세요!"} */}
    </div>
  );
}
