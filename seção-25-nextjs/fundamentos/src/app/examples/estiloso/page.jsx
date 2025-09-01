import styles from "./Estiloso.module.css";

export default function Estiloso() {
  return (
    <div>
      <h1 className={`${styles.roxo} ${styles.borda}`}>
        Estilo Usando CSS Módulos
      </h1>
    </div>
  );
}
