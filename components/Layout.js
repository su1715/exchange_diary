import utilStyles from "../styles/utils.module.css";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

export default function Layout({ children }) {
  return (
    <div className={utilStyles.layout}>
      <nav className={utilStyles.leftSide}>
        <LeftNav />
      </nav>
      <main className={utilStyles.main}>{children}</main>
      <aside className={utilStyles.rightSide}>
        <RightNav />
      </aside>
    </div>
  );
}
