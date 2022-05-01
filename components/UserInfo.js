import { useRecoilValue } from "recoil";
import { userState } from "../util/recoil";
import userInfoStyles from "../styles/UserInfo.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();
  const user = useRecoilValue(userState);
  if (session) {
    return (
      <div className={userInfoStyles.userInfo}>
        <div>
          <span className={userInfoStyles.nickname}>{user.nickname} </span>님
        </div>
        <div>{user.id}</div>
        <div>{user.point} point</div>
        <button className="button" onClick={signOut}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className={userInfoStyles.userInfo}>
      로그인이 필요합니다{" "}
      <button className="button" onClick={signIn}>
        Sign in
      </button>
    </div>
  );
}
