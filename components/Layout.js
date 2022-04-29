import layoutStyles from "../styles/Layout.module.css";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <nav className={layoutStyles.leftSide}>
        <LeftNav />
      </nav>
      <main className={layoutStyles.main}>{children}</main>
      <aside className={layoutStyles.rightSide}>
        <RightNav />
      </aside>
    </div>
  );
}
