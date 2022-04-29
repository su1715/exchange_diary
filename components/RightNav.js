import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  userState,
  friendsState,
  paperState,
  receiveLettersState
} from "../util/recoil";
import LetterItem from "./LetterItem";

export default function RightNav() {
  const user = useRecoilValue(userState);
  const friends = useRecoilValue(friendsState);
  const receiveLetters = useRecoilValue(receiveLettersState);
  const setPaper = useSetRecoilState(paperState);
  return (
    <>
      <div>{user.nickname}의 친구들</div>
      {friends.map(friend => {
        const list = receiveLetters
          .filter(letter => letter.caller === friend.id)
          .map(letter => <LetterItem key={letter.id} letter={letter} />);
        return (
          <div key={friend.id}>
            <div>{friend.nickname}</div>
            <div>{list.length > 0 ? list : "일기가 없습니다"}</div>
          </div>
        );
      })}
    </>
  );
}
