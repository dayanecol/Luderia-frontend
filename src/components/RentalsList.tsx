import styles from "../styles/components/Rental.module.css";
interface RentalsListProps {
  rentals: Rental[];
}

const RentalsList: React.FC<RentalsListProps> = ({ rentals }) => {
  if (!rentals.length) {
    return <p>Nenhuma locação encontrada.</p>;
  }
  console.log(rentals);
  return (
    <ul>
      {rentals.map((rental) => (
        <li key={rental.id} className={styles.rental_info}>
          <p>Usuário: {rental.user.name}</p>
          <p>Jogo: {rental.game.title}</p>
          <p>Data de início: {rental.start_date}</p>
          <p>Data de fim: {rental.end_date}</p>
        </li>
      ))}
    </ul>
  );
};

export default RentalsList;
