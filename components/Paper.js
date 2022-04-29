import { useRecoilValue } from "recoil";
import { totalPapersState } from "../util/recoil";

export default function Paper({ id }) {
  const totalPapers = useRecoilValue(totalPapersState);
  console.log(totalPapers);
  console.log(totalPapers.find(paper => paper.id === id));
  //const { caller, reciever, text } = totalPapers.find(paper => paper.id === id);
  return (
    <div>
      {/* <div>보낸이: {caller}</div>
      <div>받는이: {reciever}</div>
      <div>{text}</div> */}
    </div>
  );
}
