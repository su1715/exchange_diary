import styles from "../../styles/InfoLayout.module.css";

export default function InfoLayout({ children }) {
  return <div className={styles.info}>{children}</div>;
}
