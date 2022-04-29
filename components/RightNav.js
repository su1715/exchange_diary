import { useSession } from "next-auth/react";
import FriendList from "./FriendList";

export default function RightNav() {
  const { data: session } = useSession();
  if (session) {
    return <FriendList />;
  }
  return <></>;
}
