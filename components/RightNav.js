import { useRecoilValue } from "recoil";
import { userState, friendsState } from "../util/recoil";

export default function RightNav() {
  const user = useRecoilValue(userState);
  const friends = useRecoilValue(friendsState);
  return (
    <>
      <div>{user.nickname}의 친구들</div>
      {friends.map(friend => (
        <div key={friend.id}>
          <div>{friend.nickname}</div>
          <div>{dateFormatting(friend.time) || "일기가 도착했습니다!"}</div>
        </div>
      ))}
    </>
  );
}

function dateFormatting(time) {
  const getDate = new Date(time);
  const nowDate = new Date();
  const elapsed = (getDate - nowDate) / 1000;
  const min = Math.floor(elapsed / 60) % 60;
  const hour = Math.floor(Math.floor(elapsed / 60) / 60);
  let format = hour > 0 ? `${hour}시간` : "";
  format += min > 0 ? `${min}분` : "";
  return format;
}
