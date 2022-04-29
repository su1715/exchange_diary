import { useRecoilValue } from "recoil";
import { userState, friendsState, receiveLettersState } from "../util/recoil";
import Friend from "./Friend";

export default function FriendsList() {
  const user = useRecoilValue(userState);
  const friends = useRecoilValue(friendsState);
  const receiveLetters = useRecoilValue(receiveLettersState);
  return (
    <>
      <h2>{user.nickname}의 친구들</h2>
      {friends.map(friend => {
        const letterList = receiveLetters.filter(
          letter => letter.caller === friend.id
        );
        return <Friend nickname={friend.nickname} letterList={letterList} />;
      })}
    </>
  );
}
