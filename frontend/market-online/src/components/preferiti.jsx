import React, { useState, useEffect } from "react";
import { getFavoriteProducts } from "../utils/APIRoutes";
import { Link } from "react-router-dom";
import "./carrello.css";
import { TbCircleArrowLeft } from "react-icons/tb";

export default function Preferiti({ onClose }) {
  // RECUPERA I DATI DELL'UTENTE DAL LOCALSTORAGE
  const user = JSON.parse(localStorage.getItem("chat-app-user"));

  // VERIFICO SE L'UTENTE è LOGGATO E PRENDO IL SUO USER ID
  const userid = user ? user._id : "Ospite";
  console.log(userid)

  // ELEMENTI DI TIPO USESTATE
  const [preferiti, setPreferiti] = useState([]);

  // FUNZIONE PER PRENDERE I DATI DEL CARRELLO PRESENTE ALL'UTENTE
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(getFavoriteProducts(userid));
        if (response.ok) {
          const data = await response.json();
          setPreferiti(data);
          console.log(data);
        } else {
          const errorData = await response.json();
          console.error(
            "Errore durante il recupero del carrello:",
            errorData.error
          );
        }
      } catch (error) {
        console.error("Errore durante il recupero del carrello:", error);
      }
    };
    fetchCartData();
  }, [userid]);

  return (
    <div className="carrello">
      <TbCircleArrowLeft onClick={onClose} className="return" />
      <h3>Qui puoi trovare i prodotti che preferisci</h3>
      <div className="lista">
        {preferiti.map((prodotto, index) => (
          <div key={index} className="prodotto">
            <img src={prodotto.image} alt={prodotto.nome} />
            <p className="name">{prodotto.nome}</p>
            <p>
              <b>{prodotto.price}€</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

