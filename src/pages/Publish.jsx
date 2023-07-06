import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../assets/css/Publish.css'
import Cookies from 'js-cookie';

const Publish = ({token}) => {
    const [titre, setTitre] = useState();
    const [date, setDate] = useState();
    const [montant, setMontant] = useState();
    const [comment, setComment] = useState();
    const [nombre, setNombre] = useState();

    //console.log("token : " + token);

    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
          console.log("Titre " + titre);
          console.log("Montant " + montant);
          console.log("Date " + date);
          console.log("Comment " + comment);
          console.log("Nombre " + nombre);
          console.log("id " + Cookies.get('login'));

          const formData = new FormData();
          formData.append("titre", titre);
          formData.append("montant", montant);
          formData.append("date", date);
          formData.append("comment", comment);
          formData.append("nombre", nombre);
          formData.append("idLogin", Cookies.get('login'));
        /*
          const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/offer/publish`,
            formData,
            {
              headers: {
                Authorization: "Bearer " + token,
                //send formData with axios make this headers EXPLICIT !
                "Content-Type": "multipart/form-data",
              },
            }
          );
          */
          // console.log(response.data);
          /*
          if (response.data._id) {
            // redirectoin vers l'offre
            navigate(`/offer/${response.data._id}`);
          } else {
            alert("Une erreur est survenue, veuillez réssayer");
          }*/
        } catch (error) {
            /*
          alert(
            error?.response?.data?.message || "Une erreur est survenue, veuillez réssayer"
          );
          */
        }
    };

    
    return token ? (
        <div className="publish-container">
            <h2>Publie ton projet</h2>
            <form onSubmit={handleSubmit}>
                <div className="text-input-section">
                    <div className="text-input">
                        <input
                            type="text"
                            id="titre"
                            name="titre"
                            value={titre}
                            placeholder="titre"
                            onChange={(event) => {
                              const value = event.target.value;
                              setTitre(value);
                            }}
                        />
                    </div>
                    <div className="text-input">
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            placeholder="date"
                            onChange={(event) => {
                              const value = event.target.value;
                              setDate(value);
                            }}
                        />
                    </div>
                    <div className="text-input">
                        <input
                            type="text"
                            id="montant"
                            name="montant"
                            value={montant}
                            placeholder="montant"
                            onChange={(event) => {
                              const value = event.target.value;
                              setMontant(value);
                            }}
                        />
                    </div>
                    <div className="text-input">
                        <input
                            type="text"
                            id="comment"
                            name="comment"
                            value={comment}
                            placeholder="Comment"
                            onChange={(event) => {
                              const value = event.target.value;
                              setComment(value);
                            }}
                        />
                    </div>
                    <div className="text-input">
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="nombre"
                            onChange={(event) => {
                              const value = event.target.value;
                              setNombre(value);
                            }}
                        />
                    </div>
                    <div className="form-button-div">
                        <button type="submit" className="form-validation">
                        Ajouter
                        </button>
                    </div>
                </div>
            </form>
        </div>
    ) : (
        <div className="publish-container">
            <p>Accés interdit</p>
            <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
            <Link to="/login">Connectes toi !</Link>
        </div>
    );
}

export default Publish;