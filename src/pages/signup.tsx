import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/components/Auth.module.css";
import { register } from "../utils/user";
import { setCookie } from "cookies-next";
import Link from "next/link";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = await register({ name, email, password });
      setCookie("token", token);
      router.push("/signin");
    } catch (error) {
      setError("Não foi possível cadastrar o usuário");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.aside}>
        <h1 className={styles.text}>É muito fácil se cadastrar!</h1>
        <h2 className={styles.text}>Crie sua conta agora mesmo!</h2>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Crie sua conta</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Preencha seus dados:</h2>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.formGroup}>
            <input
              placeholder="Nome"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              placeholder="Senha"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              placeholder="Confirme a senha"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
          <Link href="/signin" style={{ textDecoration: "none" }}>
            <h6 className={styles.text}>Já possuí uma conta? Entre!</h6>
          </Link>
          <Link href="/" style={{ textDecoration: "none" }}>
            <h6 className={styles.text}>Voltar para Home</h6>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
