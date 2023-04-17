import api from "./api";

export const getRentals = async (): Promise<Rental[]> => {
  try {
    const response = await api.get("/rentals");
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível acessar os alugueis");
  }
};
