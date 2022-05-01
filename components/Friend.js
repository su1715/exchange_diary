import LetterItem from "./LetterItem";
import { useRecoilValue } from "recoil";
import { receiveLettersState, dateState } from "../util/recoil";
import friendStyles from "../styles/Friend.module.css";
import { isSameDate } from "../util/date";

export default function Friend({ friend }) {
  const date = useRecoilValue(dateState);
  const receiveLetters = useRecoilValue(receiveLettersState);
  const letterList = receiveLetters.filter(
    letter => letter.caller === friend.id
  );
  const todayLetterList = letterList.filter(letter =>
    isSameDate(letter.transmissionTime, date)
  );
  const letterItemList = todayLetterList.map(letter => (
    <LetterItem key={letter.id} letter={letter} />
  ));
  return (
    <>
      {letterItemList.length > 0 ? (
        <div className={friendStyles.friend}>
          <div className={friendStyles.nickname}>{friend.nickname}</div>
          <div className={friendStyles.item}>{letterItemList}</div>
        </div>
      ) : null}
    </>
  );
}
