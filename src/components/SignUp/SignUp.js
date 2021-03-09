import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SignUp.css";
import devGirl from "../../images/devGirl.png";
import { Link } from "react-router-dom";

const SignUp = ({ setUserName, userName }) => {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [userNameMessage, setUserNameMessage] = useState("");
  const [passwordMessage, setPassWordMessage] = useState("");
  const [matchPasswordMessage, setMatchPassWordMessage] = useState("");

  //Get the user name and confirm the name has no special characters
  const confirmCorrectUserName = (ev) => {
    const user = ev.target.value;
    setUserName(user);
    const noSpecialCharactersRegex = /[^A-Za-z\s]/;
    const correctUserName = noSpecialCharactersRegex.test(user);

    !correctUserName
      ? setUserNameMessage("OK")
      : setUserNameMessage("Username can't have special characters");
  };

  //Get the password and confirm it's correct
  const confirmCorrectPassword = (ev) => {
    const upperCaseMatchRegex = /[A-Z]/;
    const passwordValue = ev.target.value;
    const upperCaseMatch = upperCaseMatchRegex.test(passwordValue);
    setPassword(passwordValue);

    if (passwordValue.length > 1 && passwordValue.length < 7) {
      setPassWordMessage("Password must contains at least 7 characters");
    } else if (upperCaseMatch) {
      setPassWordMessage("Password must contains at least a capital letter");
    } else if (!passwordValue.includes("#")) {
      setPassWordMessage("Password must contains at least one #");
    }

    if (
      passwordValue.length >= 7 &&
      passwordValue.includes("#") &&
      upperCaseMatch
    )
      setPassWordMessage("OK");
  };

  //Confirm both password values are equal
  const confirmMatchPasswords = (ev) => {
    const passwordValue = ev.target.value;
    setConfirmedPassword(passwordValue);

    password !== passwordValue
      ? setMatchPassWordMessage("Passwords don't match")
      : setMatchPassWordMessage("OK");
  };
  //Button able when all inputs are OK
  const disableButton = () => {
    if (
      passwordMessage === "OK" &&
      matchPasswordMessage === "OK" &&
      userNameMessage === "OK"
    ) {
      return "";
    } else {
      return "disabled";
    }
  };

  return (
    <section className="signupForm">
      <div className="container">
        <img src={devGirl} alt="Dev Girl" className="formImage" />
        <form className="form">
          <label htmlFor="userName" className="label name">
            Username <span className="arter">*</span>
          </label>
          <input
            type="text"
            className="input name"
            onChange={confirmCorrectUserName}
            defaultValue={userName}
            required
          />
          <p className="message">{userNameMessage}</p>
          <label htmlFor="password" className="label password">
            Password <span className="arter">*</span>
          </label>
          <input
            type="password"
            name="password"
            className="input"
            onChange={confirmCorrectPassword}
            defaultValue={password}
            required
          />

          <p className="message">{passwordMessage}</p>
          <label htmlFor="passwordConfirmed" className="label password">
            Confirm Password <span className="arter">*</span>
          </label>
          <input
            type="password"
            name="passwordConfirmed"
            className="input"
            onChange={confirmMatchPasswords}
            defaultValue={confirmedPassword}
            required
          />

          <p className="message">{matchPasswordMessage}</p>

          <Link to="/home" className="link">
            <input
              type="button"
              value="Sign Up"
              className="input signUpButton"
              title="Home"
              disabled={disableButton()}
            />
          </Link>
          <p className="message">
            Fields with <span className="arter">*</span> are required
          </p>
        </form>
      </div>
    </section>
  );
};

SignUp.propTypes = {
  setUserName: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};
export default SignUp;
