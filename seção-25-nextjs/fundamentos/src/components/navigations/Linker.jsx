import Link from "next/link";

import styles from "./Linker.module.css";

export default function Linker(props) {
  return (
    <Link className={styles.linker} href={props.href}>
      {props.title}
    </Link>

    // <Link href={props.href}>
    //   <button className="btn btn-primary" style={{ backgroundColor: props.color }}>{props.title}</button>
    // </Link>
  );
}
