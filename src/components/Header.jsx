import React from "react";
import { useNavigate, Link} from "react-router-dom";

const Header = ({search,setSearch, token, setUser }) => {

    const navigate = useNavigate();

    return (
        <div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Publish">Lance ton projet</Link>
                </nav>
                <h1>detakende-spill</h1>
                {token ? (
                    <button
                        onClick={() => {
                        setUser(null);
                        }}
                        className="button-logout"
                    >
                        Se déconnecter
                    </button>
                ) : (
                    <div>
                        <button
                        onClick={() => {
                            navigate("/signup");
                        }}
                        className="header-button button-login-signup button-signup"
                        >
                        S'inscrire
                        </button>
                        <button
                        onClick={() => {
                            navigate("/login");
                        }}
                        className="header-button button-login-signup"
                        >
                        Se connecter
                        </button>
                    </div>
                )}
            </div>
            <div>
                <input
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Projets"
                />
            </div>
        </div>
    );

}

export default Header;

/*
 <imput 
type="text"
className="search-input"
placeholder="Recherche des articles"
onChange={(event) => setSearch(event.target.value)}
/>
<select name="type" id="type">
<option value="JDR">JDR</option>
<option value="JEUX">JEUX</option>
<option value="BD">Bandes dessinées</option>
</select>
*/