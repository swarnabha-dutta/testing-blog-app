import "./App.css";

function App() {
  let isLoggedIn = true;
  return (
    <div className="App">
      <h1> queryBy and queryAllBy</h1>

      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
}

export default App;