import { useEffect, useState } from "react";
import { auth } from "../servicos/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login"); // se não estiver logado, redireciona
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: "2rem" }}>
      <h1>Bem-vindo ao App de Denúncias</h1>
      {user && <p>Você está logado como: {user.email}</p>}

      <button onClick={handleLogout} style={{ marginTop: "1rem" }}>
        Sair
      </button>

      <div style={{ marginTop: "2rem" }}>
        <h2>Suas denúncias</h2>
        <p>(aqui vamos listar as denúncias futuramente)</p>
      </div>
    </div>
  );
}

export default Home;
