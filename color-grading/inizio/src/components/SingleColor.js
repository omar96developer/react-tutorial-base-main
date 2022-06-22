import React, { useState, useEffect } from "react";
import { rgbToHex } from "../utils/helper";

const SingleColor = ({ rgb, type, weidht }) => {
  const [message, setMessage] = useState(false);
  const copiaColore = () => {
    navigator.clipboard
      .writeText(rgbToHex(...rgb))
      .then(() => setMessage(true))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);
  return (
    <article
      className={`single-color ${type}`}
      style={{ backgroundColor: rgbToHex(...rgb) }}
      onClick={copiaColore}
    >
      <h5>{rgbToHex(...rgb)}</h5>
      {message && <p>Colore Copiato</p>}
    </article>
  );
};

export default SingleColor;
