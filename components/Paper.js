import { useRecoilValue, useSetRecoilState } from "recoil";
import { totalPapersState, paperState } from "../util/recoil";

export default function Paper({ paperId }) {
  const totalPapers = useRecoilValue(totalPapersState);
  const setPaper = useSetRecoilState(paperState);
  const { caller, receiver, text } = totalPapers.find(
    paper => paper.id === paperId
  );
  const onClick = () => {
    setPaper("");
  };
  return (
    <div>
      <div>보낸이: {caller}</div>
      <div>받는이: {receiver}</div>
      <div>{text}</div>
      <button onClick={onClick}>닫기</button>
    </div>
  );
}
