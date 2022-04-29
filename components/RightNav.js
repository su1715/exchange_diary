import { useSession } from "next-auth/react";
import FriendsList from "./FriendsList";

export default function RightNav() {
  const { data: session } = useSession();
  if (session) {
    return <FriendsList />;
  }
  return <></>;
}
