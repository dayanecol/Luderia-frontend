import { useState, useEffect } from "react";
import { getGames } from "../utils/games";
import styles from "../styles/components/Game.module.css";

const FilterBar: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [optionSelected, setOptionSelected] = useState("Todos os jogos");

  useEffect(() => {
    const fetchGames = async () => {
      optionSelected === "Todos os jogos" ? "/games" : "/games/available";
      try {
        const response = await getGames();

        console.log(response);
        setGames(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  }, [optionSelected]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleOptionChange = (option: string) => {
    setOptionSelected(option);
  };
  return (
    <main className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.content}>
          <input
            type="text"
            placeholder="Pesquisar jogos"
            value={searchValue}
            onChange={handleSearchChange}
            className={styles.input}
          />
          <div className={styles.options}>
            <button
              className={optionSelected === "Todos os jogos" ? "selected" : ""}
              onClick={() => handleOptionChange("Todos os jogos")}
            >
              Todos os jogos
            </button>
            <button
              className={
                optionSelected === "Jogos disponíveis" ? "selected" : ""
              }
              onClick={() => handleOptionChange("Jogos disponíveis")}
            >
              Jogos disponíveis
            </button>
          </div>
        </div>
      </div>
      <div className={styles.games_container}>
        <div className={styles.games_content}>
          {games
            .filter((game) =>
              game.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((game) => (
              <div className={styles.game_card} key={game.id}>
                <h2>{game.title}</h2>
                <p>{`Preço: R$ ${game.price.toFixed(2)}`}</p>
                <p>{game.quantity > 0 ? "Disponível" : "Indisponível"}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default FilterBar;
