import layoutStyles from "../../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <main className={layoutStyles.main}>
        <h1 className={layoutStyles.title}>추억의 교환일기</h1>
        {children}
      </main>
    </div>
  );
}
