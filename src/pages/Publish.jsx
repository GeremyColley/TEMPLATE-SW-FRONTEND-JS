import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../assets/css/Publish.css'

const Publish = ({token}) => {
    const [nomProjet, setNomProjet] = useState();
    const [montantDuProjet,setMontantDuProjet] = useState();
    console.log("token : " + token);

    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
          const formData = new FormData();
          //formData.append("picture", file);
          formData.append("title", nomProjet);
          formData.append("Montant du projet", montantDuProjet);
          //formData.append("description", description);
          //formData.append("price", price);
          //formData.append("size", selectedSize);
          //formData.append("color", color);
          //formData.append("condition", selectedWearRate);
          //formData.append("city", city);
          //formData.append("brand", selectedBrand);
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
                            id="nomProjet"
                            name="nomProjet"
                            value={nomProjet}
                            placeholder="Nom du projet"
                            onChange={(event) => {
                            const value = event.target.value;
                            setNomProjet(value);
                            }}
                        />
                    </div>
                    <div className="text-input">
                        <input
                            type="text"
                            id="montantDuProjet"
                            name="montantDuProjet"
                            value={montantDuProjet}
                            placeholder="Montant du Projet"
                            onChange={(event) => {
                            const value = event.target.value;
                            setMontantDuProjet(value);
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