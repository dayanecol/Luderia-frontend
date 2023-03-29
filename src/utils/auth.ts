import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import api from "./api";
import { setCookie } from "cookies-next";

const JWT_SECRET = "top_secret";

export const createToken = (payload: any): string => {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  return token;
};

export const verifyToken = (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Token inválido");
  }
};

export const login = async (credentials: Credentials): Promise<string> => {
  try {
    const response = await api.post("/auth/sign-in", credentials);
    const userData = response.data;
    console.log("userData", userData.token);
    const token = userData.token;
    setCookie("token", token);

    return token;
  } catch (error) {
    throw new Error("Usuário ou senha inválidos");
  }
};
