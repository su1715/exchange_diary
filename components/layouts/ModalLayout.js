import paperStyle from "../../styles/Modal.module.css";

export default function ModalLayout({ children }) {
  return (
    <div className={paperStyle.back}>
      <div className={paperStyle.paper}>{children}</div>
    </div>
  );
}
