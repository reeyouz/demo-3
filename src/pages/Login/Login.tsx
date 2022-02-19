import React, { useState, ChangeEventHandler, FormEventHandler } from "react";
import { theme } from "../../theme";
import { LogoSVG } from "../../assets";
import { Input, Button } from "../../components";
import "./Login.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { loginAsync, resetErrorMsg } from "../../store/Auth";

interface LoginProps {}
export function Login(props: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (auth.errorMsg !== "") {
      dispatch(resetErrorMsg());
    }
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(loginAsync({ email, password }));
  };

  return (
    <div
      style={{ backgroundColor: theme.backgroundColor }}
      className="flex justify-center w-screen-full h-screen-full overflow-auto"
    >
      <div className="m-auto">
        <div className="login-form">
          <header>
            <div className="logo">
              <LogoSVG />
            </div>
            <h1 className="text-center text-md">Login to Docsumo</h1>
          </header>
          <form onSubmit={handleSubmit}>
            <Input
              required
              type="email"
              name="email"
              placeholder="Work Email"
              value={email}
              onChange={handleChange}
            />
            <Input
              required
              minLength={8}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <p className="login-form-error text-center">{auth.errorMsg}</p>
            <Button
              disabled={auth.state === "loading"}
              className="flex border-none w-full justify-center items-center login-form-button"
            >
              LOGIN
            </Button>
          </form>
          <footer className="flex items-center">
            <p className="flex-grow">Don't have an account?</p>
            <Button className="login-form-signup">Sign up</Button>
          </footer>
        </div>
      </div>
    </div>
  );
}
