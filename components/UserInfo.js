import { useRecoilValue } from "recoil";
import { userState } from "../util/recoil";
import userInfoStyles from "../styles/UserInfo.module.css";

export default function UserInfo() {
  const user = useRecoilValue(userState);
  return (
    <div className={userInfoStyles.userInfo}>
      <div className={userInfoStyles.nickname}>{user.nickname}</div>
      <div>Id : {user.id}</div>
      <div>Point : {user.point}</div>
    </div>
  );
}
