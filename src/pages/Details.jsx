
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/Details.css";

const details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/offer/${params.id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [params.id]);

  return isLoading ? (
    <p>HYU</p>
  ) : (
    <div className="details-container">
        <h1>{data.titre}</h1>
        <p>{data.montant}</p>       
        <p>{data.comment}</p>
        <p>{data.nombre}</p>
        <p>{data.date}</p>
    
    </div>

  
  );
};

export default details;
