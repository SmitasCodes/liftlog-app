import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { logOut } = useAuth();

  return (
    <div>
      <h2>This is protected route </h2>
      <button onClick={logOut} className="cursor-pointer">Log the fuck out</button>
    </div>
  );
};

export default Home;
