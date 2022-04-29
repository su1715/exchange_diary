import { useRecoilValue } from "recoil";
import { userState, friendsState } from "../util/recoil";
import Friend from "./Friend";

export default function FriendList() {
  const user = useRecoilValue(userState);
  const friends = useRecoilValue(friendsState);
  const friendList = friends.map(friend => (
    <Friend key={friend.id} friend={friend} />
  ));
  return (
    <>
      <h2>{user.nickname}의 친구들</h2>
      {friendList.length > 0 ? friendList : "친구를 추가해볼까요?"}
    </>
  );
}
