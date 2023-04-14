import "./App.css";
import { Login, Register } from "./components";

function App() {
  return (
    <div className="App">
      <h2>Register</h2>

      <Register />
      <h2>Login</h2>
      <Login />
    </div>
  );
}

export default App;
