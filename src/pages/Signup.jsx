import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../assets/css/Signup.css'

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `${import.meta.env.VITE_API}/user/signup`,
        {
          email: email,
          password: password,
          username: username,
          newsletter: true,
        }
      );
      if (response.data.token) {
        setUser(response.data.token, response.data._id);
        navigate("/");
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte chez nous !");
      }
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value, email);
          }}
          placeholder="Nom d'utilisateur"
          type="text"
        />
        <input
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          placeholder="Email"
          type="email"
        />
        <span className="signup-login-error-message">{errorMessage}</span>
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Mot de passe"
          type="password"
        />
        <div className="checkbox-container">
          <div>
            <input type="checkbox" />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login" className="link-login">Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default Signup;
