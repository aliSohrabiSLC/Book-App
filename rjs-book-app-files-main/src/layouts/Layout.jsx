import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          {" "}
          <a href="https://github.com/aliSohrabiSLC">github </a> | React.js Full
          Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Ali Sohrabi With 😍</p>
      </footer>
    </>
  );
}

export default Layout;
