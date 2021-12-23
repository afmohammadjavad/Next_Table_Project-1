








import * as styles from "./AppLayout.module.css";
function AppLayout({ children }) {
  return (
    <div className={styles.width}>
      { children }
    </div>
  );
} export default AppLayout;
