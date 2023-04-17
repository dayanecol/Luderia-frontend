import api from "./api";

export const getGames = async (optionSelected: string): Promise<Game[]> => {
  try {
    const response = await api.get(optionSelected);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível acessar os jogos");
  }
};
