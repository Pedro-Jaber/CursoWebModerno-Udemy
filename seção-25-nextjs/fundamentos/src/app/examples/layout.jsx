import styles from "./Examples.module.css";

export default function Layout({ children }) {
  return (
    <div>
      {/* <div className={styles.backHome}>
        <Link href="/">Voltar para Home</Link>
      </div> */}
      <div className={styles.example_container}>{children}</div>
    </div>
  );
}
