import LetterItem from "./LetterItem";
import { useRecoilValue } from "recoil";
import { receiveLettersState } from "../util/recoil";
import friendStyles from "../styles/Friend.module.css";

export default function Friend({ friend }) {
  const receiveLetters = useRecoilValue(receiveLettersState);
  const letterList = receiveLetters.filter(
    letter => letter.caller === friend.id
  );
  const letterItemList = letterList.map(letter => (
    <LetterItem key={letter.id} letter={letter} />
  ));
  return (
    <div className={friendStyles.friend}>
      <div className={friendStyles.nickname}>{friend.nickname}</div>
      <div className={friendStyles.item}>
        {letterItemList.length > 0 ? letterItemList : "일기가 없습니다"}
      </div>
    </div>
  );
}
