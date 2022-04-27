import Topnav from "./components/Topnav";

function App() {
  const name = 'Justin'

  return (
    <div className="container">
      <Topnav title={name}></Topnav>
      <h1>Good morning</h1>
      <h2>Buenos dias</h2>
      <p>Hello {name}</p>
    </div>
  );
}

export default App;
