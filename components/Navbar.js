import Link from "next/link"
import styles from "../styles/Navbar.module.css"
export default function Navbat() {
  return (
    <div className={styles.bg}>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/contact">contact</Link>
    </div>
  )
}
