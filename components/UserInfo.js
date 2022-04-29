import { useRecoilValue } from "recoil";
import { userState } from "../util/recoil";

export default function UserInfo() {
  const user = useRecoilValue(userState);
  return (
    <div>
      <h3>회원정보</h3>
      <div>name : {user.name}</div>
      <div>nickname : {user.nickname}</div>
      <div>level : {user.level}</div>
      <div>point : {user.point}</div>
    </div>
  );
}
