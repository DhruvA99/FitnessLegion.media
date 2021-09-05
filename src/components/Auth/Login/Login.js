import React, { useState } from "react";
import { useAuth } from "../../../Context/AuthContext/Auth-context";
import { loginUser } from "../../../Context/AuthContext/AuthActions";
import classes from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [error, setError] = useState({
    email: null,
    password: null,
  });
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const { authState, authDispatch } = useAuth();

  const onChangeHandler = (e) => {
    let valid = false;
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        const errorEmail = validEmailRegex.test(value)
          ? ""
          : "Invalid Email Id";
        setError((error) => {
          return {
            ...error,
            email: errorEmail,
          };
        });
        break;

      case "password":
        setPassword(value);
        const errorPassword =
          value.length < 7 ? "Password must be 8 characters long" : "";
        setError((error) => {
          return { ...error, password: errorPassword };
        });
        break;
      default:
        break;
    }

    if (
      error.email === "" &&
      error.password === "" &&
      email !== "" &&
      password !== ""
    ) {
      valid = true;
    }
    setIsValid(valid);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError({ email: null, password: null });
    loginUser(authDispatch, email, password);
  };

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.card}>
          <form className={classes.form} onSubmit={(e) => onSubmitHandler(e)}>
            <span className={classes.titleText}>LOGIN</span>
            <div className={classes.inputDiv}>
              <input
                className={classes.input}
                name="email"
                type="email"
                value={email}
                placeholder="Email"
                onChange={onChangeHandler}
              />
              <span className={classes.error_message}>{error.email}</span>
            </div>
            <div className={classes.inputDiv}>
              <input
                className={classes.input}
                name="password"
                value={password}
                type={showPassword}
                placeholder="Password"
                onChange={onChangeHandler}
              />
              <span className={classes.error_message}>{error.password}</span>
            </div>
            <input
              type="checkbox"
              onClick={() =>
                setShowPassword((showPassword) =>
                  showPassword === "text" ? "password" : "text"
                )
              }
            />
            <label>
              <span style={{ fontWeight: "200" }}>Show Password</span>
            </label>

            <div className={classes.buttonDiv}>
              <button
                disabled={!isValid}
                type="submit"
                value="Submit"
                className={classes.button}
              >
                {authState.status === "loading" ? "Loggin In...." : "LOGIN"}
              </button>
              <span>OR</span>
              <button
                onClick={() =>
                  loginUser(authDispatch, "admin@da.com", "asdfghjkl")
                }
                className={classes.button}
              >
                {authState.status === "loading"
                  ? "Loggin In...."
                  : "LOGIN AS GUEST"}
              </button>
              <span style={{ margin: "auto", padding: "10px", color: "red" }}>
                <strong>{authState.error}</strong>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
