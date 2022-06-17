import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";
const Slider = () => {
  const [recensioni, setRecensioni] = useState(data);
  const [active, setActive] = useState(0);

  //passa alla prossima slide
  const prossimaSlide = () => {
    setActive(prevValue => {
      if (prevValue > recensioni.length - 2 ) {
        return 0
      }
      return prevValue + 1;
    })
  };
  //passa alla precendente slide
  const precedenteSlide = () => {
    setActive(prevValue => {
      if (prevValue -1 < 0 ) {
        return recensioni.length -1;
      }
      return prevValue - 1;
    })
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      prossimaSlide();
    }, 3000);
    return () => clearTimeout(timer);
  }, [active]);
  return (
    <div className="container slider">
      {recensioni.map((recensione, index) => {
        let positionClass = "";
        if (index === active) {
          positionClass = "active";
        } else if (
          index + 1 === active ||
          (active === 0 && index === recensioni.length - 1)
        ) {
          positionClass = "prev";
        } else {
          positionClass = "next";
        }
        return (
          <Slide key={recensione.id} {...recensione} classes={positionClass} />
        );
      })}
      
      <div className="btn-group slider-btn-group">
        <button className="btn btn-slider prev-slider" onClick={precedenteSlide}>prev</button>
        <button className="btn btn-slider next-slider" onClick={prossimaSlide}>next</button>
      </div>
    </div>
  );
};

export default Slider;
