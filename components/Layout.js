import layoutStyles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <main className={layoutStyles.main}>{children}</main>
    </div>
  );
}
