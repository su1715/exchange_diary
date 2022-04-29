import LetterItem from "./LetterItem";

export default function Friend({ nickname, letterList }) {
  const letterItemList = letterList.map(letter => (
    <LetterItem key={letter.id} letter={letter} />
  ));
  return (
    <div>
      <div>{nickname}</div>
      <div>
        {letterItemList.length > 0 ? letterItemList : "일기가 없습니다"}
      </div>
    </div>
  );
}
