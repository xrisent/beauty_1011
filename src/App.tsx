import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const { service } = useSelector((state) => state.services);

  return <>{service}</>;
}

export default App;
