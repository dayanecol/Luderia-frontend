import api from "./api";

export const getGames = async (): Promise<Game[]> => {
  try {
    const response = await api.get("/games");
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível acessar os jogos");
  }
};
