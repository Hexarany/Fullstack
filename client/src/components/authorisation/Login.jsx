import React, { useState } from "react";
import "../css/authorisation.min.css";
import Input from "../../utils/input/Input";
import { login } from "../../actions/user";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="authorisation">
      <div className="authorisation__header">Авторизация</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введите ваш email..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите ваш пароль..."
      />
      <button
        className="authorisation__btn"
        onClick={() => dispatch(login(email, password))}
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
