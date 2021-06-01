import Navbar from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default layout;
