import { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <section className={classes.auth}>
      <Card className={classes.card}>
        <h2>
          <span>Welcome</span> to <br /> Beats Per Mint
        </h2>
      </Card>
      <div className={classes.login}>
        <h2>Log in</h2>
        <Button className={classes.subscription}>
          Please enter your information to log in to your account.
          <br />
          <b>Don’t have an account? </b>
          <span>Subscribe to a project to sign up</span>.
        </Button>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">
              Username<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">
              Password<span>*</span>
            </label>
            <input
              type="password"
              id="password"
              required
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button
              className={classes["login-btn"]}
              type="submit"
              disabled={!formIsValid}
            >
              Log In
            </Button>
            <Button className={classes["password-btn"]}>
              Forgot your password?
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
