import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/components/Auth.module.css";
import { login } from "../utils/auth";
import { setCookie } from "cookies-next";
import Link from "next/link";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = await login({ email, password });
      setCookie("token", token);
      router.push("/");
    } catch (error) {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.aside}>
        <h1 className={styles.text}>Bem-vindo de volta!</h1>
        <h2 className={styles.text}>Acesse sua conta agora mesmo!</h2>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Acesse sua conta</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Preencha seus dados de login:</h2>
          {error && <div className={styles.error}>{error}</div>}
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
          <button type="submit" className={styles.button}>
            Entrar
          </button>
          <Link href="/signup" style={{ textDecoration: "none" }}>
            <h6 className={styles.text}>Não possuí uma conta? Cadastre-se!</h6>
          </Link>
          <Link href="/" style={{ textDecoration: "none" }}>
            <h6 className={styles.text}>Voltar para Home</h6>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
