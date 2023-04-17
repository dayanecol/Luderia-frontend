import RentalsList from "../components/RentalsList";
import styles from "../styles/components/Rental.module.css";
interface RentalsPageProps {
  rentals: Rental[];
}

const Rentals: React.FC<RentalsPageProps> = ({ rentals }) => {
  return (
    <div className={styles.rental_container}>
      <h1 className={styles.rental_heading}>Seu carrinho</h1>
      <RentalsList rentals={rentals} />
    </div>
  );
};

export default Rentals;
