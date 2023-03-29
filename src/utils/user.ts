import api from "./api";

export const register = async (data: RegisterData): Promise<void> => {
  try {
    await api.post("/users/", data);
  } catch (error) {
    throw new Error("Não foi possível criar a conta");
  }
};
