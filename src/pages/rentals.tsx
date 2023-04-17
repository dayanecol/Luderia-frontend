import Header from "../components/Header";
import Footer from "../components/Footer";
import Rentals from "../components/Rentals";
import styles from "../styles/components/Game.module.css";

const Games: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Rentals />
      </div>

      <Footer />
    </>
  );
};

export default Games;
