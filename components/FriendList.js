import { useRecoilValue } from "recoil";
import { userState, friendsState } from "../util/recoil";
import Friend from "./Friend";
import friendListStyles from "../styles/FriendList.module.css";

export default function FriendList() {
  const user = useRecoilValue(userState);
  const friends = useRecoilValue(friendsState);
  const friendList = friends.map(friend => (
    <Friend key={friend.id} friend={friend} />
  ));
  return (
    <div className={friendListStyles.friendList}>
      <h2 classname={friendListStyles.title}>{user.nickname}의 친구들</h2>
      {friendList.length > 0 ? friendList : "친구를 추가해볼까요?"}
    </div>
  );
}
