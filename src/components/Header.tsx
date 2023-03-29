import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/Header.module.css";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Luderia
        </Link>
        <ul className={styles.menu}>
          <li className={router.pathname === "/" ? styles.active : ""}>
            <Link href="/">Início</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/games") ? styles.active : ""
            }
          >
            <Link href="/games">Jogos</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/rentals") ? styles.active : ""
            }
          >
            <Link href="/rentals">Locações</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/signin") ? styles.active : ""
            }
          >
            <Link href="/signin">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
