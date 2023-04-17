import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";
import styles from "../styles/components/Game.module.css";

const Games: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <FilterBar />
      </div>

      <Footer />
    </>
  );
};

export default Games;
