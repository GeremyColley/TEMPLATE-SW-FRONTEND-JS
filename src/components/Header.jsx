import React from "react";
import { useNavigate, useLocation, Link} from "react-router-dom";
import '../assets/css/Header.css'

const Header = ({search,setSearch, token, setUser }) => {

    const navigate = useNavigate();
    const location = useLocation(); // Pour savoir dans quel route on est. Pour utiliser location.pathname

    return (
        <div className="header-container">
            <div className="banner">
               
                <nav>
                    <Link to="/">Home</Link>
                    <br/>
                    <Link to="/Publish">Lance ton projet</Link>
                </nav>
                <br/>

                <div>

                    {(location.pathname === "/" ) ? (
                        <input
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Projets"
                        />
                    ) : (
                        <p>tyu</p>
                    )}
    
                </div>
                
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
            
        </div>
    );

}

export default Header;

/*

 <h1>detakende-spill</h1>
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