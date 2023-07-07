import React from "react";
import { useNavigate, useLocation, Link} from "react-router-dom";
import '../assets/css/Header.css'
import logo from "../assets/img/logo.png"

const Header = ({search,setSearch, token, setUser }) => {

    const navigate = useNavigate();
    const location = useLocation(); // Pour savoir dans quel route on est. Pour utiliser location.pathname

    return (
        <div className="header">
            <div className="header-container">

                <div className="cart-logo" onClick={() => {navigate("/");}}>
                    <img alt="Logo" src={logo} width="100px"  height="60px" />
                </div>
                <p>{import.meta.env.VITE_API}</p>
                <div>
                    {(location.pathname === "/" ) && (
                        <input
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Projets"
                        />
                    )}
                </div>

                <nav>
                    <Link to="/">Home</Link>
                    <br/>
                    <Link to="/Publish">Lance ton projet</Link>
                </nav>
                <br/>

                {token ? (
                    <button
                        onClick={() => {
                        setUser(null, null);
                        }}
                        className="button-logout"
                    >Se déconnecter</button>
                ) : (
                    <div>
                        <button
                            onClick={() => {
                                navigate("/signup");
                            }}
                            className="header-button button-login-signup button-signup"
                        >S'inscrire</button>
                        <br/>
                        <button
                            onClick={() => {
                                navigate("/login");
                            }}
                            className="header-button button-login-signup"
                        >Se connecter</button>
                    </div>
                )}
            </div>
            
        </div>
    );

}

export default Header;
