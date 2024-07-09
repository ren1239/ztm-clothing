
import { useState} from "react";
import "./sign-in-form.styles.scss";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input";


import {
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

export function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email && !password) {
      return;
    } else {
      try {
        await signInAuthUserWithEmailAndPassword(email, password);
        resetFormFields();
      } catch (error) {
        switch (error.code) {
          case "auth/wrong-password":
            alert("wrong password");
            break;
          case "auth/user-not-found":
            alert("no user associated");
            break;
          default:
            console.log(error);
        }
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType={""} type="submit">
            SIGN IN
          </Button>
          <Button
            buttonType={"google"}
            type="button"
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
