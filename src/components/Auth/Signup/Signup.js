import React, { useState } from "react";
import classes from "./Signup.module.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState({
    email: null,
    password: null,
    username: null,
  });
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  var validUsernameRegex = RegExp(/^[a-zA-Z0-9]+$/);
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
      case "username":
        setUsername(value);
        const errorUsername = validUsernameRegex.test(value)
          ? ""
          : "Invalid Username";
        setError((error) => {
          return {
            ...error,
            username: errorUsername,
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
      error.username === "" &&
      email !== "" &&
      password !== "" &&
      username !== ""
    ) {
      valid = true;
    }
    setIsValid(valid);
  };
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.card}>
          <form className={classes.form}>
            <span className={classes.titleText}>SIGNUP</span>
            <div className={classes.inputDiv}>
              <input
                className={classes.input}
                name="username"
                type="username"
                value={username}
                placeholder="UserName"
                onChange={onChangeHandler}
              />
              <span className={classes.error_message}>{error.username}</span>
            </div>
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
                type="password"
                placeholder="Password"
                onChange={onChangeHandler}
              />
              <span className={classes.error_message}>{error.password}</span>
            </div>

            <div className={classes.buttonDiv}>
              <button
                disabled={!isValid}
                type="submit"
                onSubmit
                className={classes.button}
              >
                SIGNUP
              </button>
              <span style={{ margin: "auto", padding: "10px", color: "red" }}>
                {/* <strong>{this.props.error}</strong> */}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
