import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Rentals from "../components/Rentals";
import styles from "../styles/components/Rental.module.css";
import { getRentals } from "../utils/rentals";

interface RentalsPageProps {
  rentals: Rental[];
}

const RentalsPage: React.FC = () => {
  const [rentals, setRentals] = useState<Rental[]>([]);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await getRentals();

        console.log(response);
        setRentals(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  }, [setRentals]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Rentals rentals={rentals} />
      </div>

      <Footer />
    </>
  );
};

export default RentalsPage;
