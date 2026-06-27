function Login() {
  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter email"
        name="email"
      />

      <input
        type="password"
        placeholder="Enter password"
        name="password"
      />

      <button>Login</button>

      <button>Reset</button>
    </div>
  );
}

export default Login;