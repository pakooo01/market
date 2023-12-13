import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.css';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Profile from "./profile";
import Carrello from "./carrello";
import Preferiti from "./preferiti";

export default function Header({ userName, surname, email }) {
  // VARIABILI USESTATE
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isPreferitiOpen, setPreferitiOpen] = useState(false);

  // FUNZIONI CHE MI PERMETTONO DI APRIRE IL CARRELLO, PROFILO, PREFERITI
  const openProfile = () => {
    setProfileOpen(true);
  };
  const closeProfile = () => {
    setProfileOpen(false);
  };

  const openCart = () => {
    setCartOpen(true);
  };
  const closeCart = () => {
    setCartOpen(false);
  };

  const openPreferiti = () => {
    setPreferitiOpen(true);
  };
  const closePreferiti = () => {
    setPreferitiOpen(false);
  };

  return (
    <div className="head">
      <h1>OrtoShop</h1>
      <div className="container-ricerca">
        <button><FaSearch/></button>
        <input type="text" placeholder="Cerca su OrtoShop"></input>
      </div>
      <ul>
        <li><CgProfile style={{ width: 25, height: 25 }} onClick={openProfile} /></li>
        {isProfileOpen && (
          <Profile
            user={{ firstName: userName, lastName: surname, email: email }}
            onClose={closeProfile}
            onLogout={() => {
              // Aggiungi la logica di logout qui
              closeProfile();
            }}
          />
        )}
        <li><FaHeart style={{ width: 25, height: 25 }} onClick={openPreferiti} /></li>
        {isPreferitiOpen && (
          <div className="preferiti">
            <Preferiti onClose={closePreferiti} />
          </div>
        )}
        <li><MdOutlineShoppingCart style={{ width: 25, height: 25, paddingRight: 5 }} onClick={openCart} /></li>
        {isCartOpen && (
          <div className="cart">
            <Carrello onClose={closeCart}/>
          </div>
        )}
      </ul>
    </div>
  );
}
