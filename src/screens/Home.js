import { userLogOut } from "../apollo";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => userLogOut()}>Log out button</button>
    </div>
  );
};

export default Home;
