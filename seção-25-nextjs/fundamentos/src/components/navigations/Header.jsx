import styles from "./Header.module.css";

import Linker from "./Linker";

export default function Header(props) {
  // props is read only

  return (
    <header className={styles.header}>
      <h1>{props.title ?? "Default"}</h1>

      <div className={styles.links}>
        <Linker href="/" title="Home" color="#5d8849ff" />

        <Linker href="/examples/estiloso" title="Estiloso" />
        <Linker href="/examples/estado" title="Estado" />

        <Linker href="/blog" title="Blog" />
        <Linker href="/blogTags" title="Blog With Tags" />
      </div>
    </header>
  );
}
