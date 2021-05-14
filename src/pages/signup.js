import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setFirstName("");
        setPassword("");
        setEmailAddress("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base method="POST" onSubmit={handleSignUp}>
            <Form.Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user ?<Form.Link>Sign In</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            {" "}
            This is protected by Google reCAPTCHA to ensure you're not a bot.
            Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
