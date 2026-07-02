import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 1000);
  }, [])
  return (
    <div className="App">
      <h1>findBy and findByAll</h1>
      {data ? <h1>data is found</h1> : <h1>data is not found</h1>}
      {/* <h1>data is found</h1> */}
    </div>
  );
}

export default App;