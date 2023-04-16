import { useState } from "react";
import { trpc } from "../trpc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, error, mutate } = trpc.login.useMutation();

  const submitHandler = () => {
    mutate({ email, password });
  };

  return (
    <div>
      {JSON.stringify(data)}
      {error && <div style={{ color: "red" }}>NO EXISTE EL USER</div>}
      <form>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Login;
