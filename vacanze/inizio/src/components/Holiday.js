import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  //funzione per scegliere il prossimo valure di selected e la prossima vacanza

  const nextHoliday = () => {
    setSelected((prevValue) => {
      if (prevValue + 1 === data.data.length){
        return 0;
      }else{
        return prevValue + 1;
      }
    });
  };
  //funzione per diminuire il valore di selected e passare alla vacanza precendente
  const prevHoliday = () => {
    setSelected(prevValue =>{
      if(prevValue - 1 < 0){
        return data.data.length - 1;
      }else{
        return prevValue - 1;
      }
    })
  }

  //funzione per fetchare dati dal api
  const getData = async () => {
    try {
      const response= await axios.get(url);
      setTimeout(() => {
        
        setData(response.data);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //return consizionale per controllare di aver risolto la promise
  if(data.success) {
    return <>
    {
      //ternary operator per verificare il numero di vacanze
      data.data.length > 0 ? <SingleHoliday {...data.data[selected]} next={nextHoliday} prev={prevHoliday}/> : <h4>No Vacanze</h4>
    }
    </>;

  }else{
   return <h2>Loading . . . </h2>;
  }
};

export default Holiday;
