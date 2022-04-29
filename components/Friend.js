import LetterItem from "./LetterItem";
import { useRecoilValue } from "recoil";
import { receiveLettersState } from "../util/recoil";

export default function Friend({ friend }) {
  const receiveLetters = useRecoilValue(receiveLettersState);
  const letterList = receiveLetters.filter(
    letter => letter.caller === friend.id
  );
  const letterItemList = letterList.map(letter => (
    <LetterItem key={letter.id} letter={letter} />
  ));
  return (
    <div>
      <div>{friend.nickname}</div>
      <div>
        {letterItemList.length > 0 ? letterItemList : "일기가 없습니다"}
      </div>
    </div>
  );
}
