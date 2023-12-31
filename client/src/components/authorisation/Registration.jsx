import React, { useState } from "react";
import "../css/authorisation.min.css";
import Input from "../../utils/input/Input";
import { registration } from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="authorisation">
      <div className="authorisation__header">Регистрация</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введите email..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button
        className="authorisation__btn"
        onClick={() => registration(email, password)}
      >
        Войти
      </button>
    </div>
  );
};

export default Registration;
