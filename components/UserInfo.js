import { useRecoilValue } from "recoil";
import { userState } from "../util/recoil";
import userInfoStyles from "../styles/UserInfo.module.css";
import { signOut } from "next-auth/react";

export default function UserInfo() {
  const user = useRecoilValue(userState);
  return (
    <>
      <div>
        <span className={userInfoStyles.nickname}>{user.nickname} </span>님
      </div>
      <div>{user.id}</div>
      <div>{user.point} point</div>
      <button className="button" onClick={signOut}>
        Sign out
      </button>
    </>
  );
}
