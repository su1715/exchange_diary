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
          <span className={userInfoStyles.nickname}>{user.nickname}</span>님
        </div>
        <div>Id : {user.id}</div>
        <div>Point : {user.point}</div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  }
  return (
    <div>
      로그인이 필요합니다 <button onClick={signIn}>Sign Up</button>
    </div>
  );
}
