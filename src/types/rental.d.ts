interface User {
  id: number;
  name: string;
  email: string;
}

interface Game {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface Rental {
  id: number;
  user: User;
  game: Game;
  start_date: string;
  end_date: string;
  createdAt: string;
  updatedAt: string;
}
