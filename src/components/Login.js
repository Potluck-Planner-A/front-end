import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
  credentials: {
    username: "",
    password: "",
  },
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const { push } = useHistory();

  const handleChange = (event) => {
    setState({
      credentials: {
        ...state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", state.credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        push("/view");
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  return (
    <div>
      <h1>Welcome to Blogger Pro</h1>
      <h2>Please enter your account information.</h2>

      <div className='login-form'>
        <form onSubmit={handleLogin}>
          <label>
            Username
            <input
              id='username'
              type='text'
              name='username'
              value={state.credentials.username}
              onChange={handleChange}
            />
          </label>

          <label>
            Password
            <input
              id='password'
              type='password'
              name='password'
              value={state.credentials.password}
              onChange={handleChange}
            />
          </label>
          <button id='submit'>Log in</button>
          {error && <p id='error'>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
