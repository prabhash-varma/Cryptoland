import Axios from 'axios';
import React, {useEffect,useState} from 'react';
import '../App.css';

import {useParams} from 'react-router-dom';

function Currency() {


    const [coindata,setcoindata]=useState({});
  
    let {id} = useParams();

  useEffect(()=>{
    Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then(response=>{
      setcoindata(response.data[0]);
      console.log(response.data[0]);
    });


  })


  return (
    

        
     
    <>
    <h1>Name: {coindata.name}</h1>
    <h1>Symbol: {coindata.symbol}</h1>
    <h1>Rank: {coindata.rank}</h1>
    <h1>Price: {coindata.price_usd}</h1>

    </>
  );
}

export default Currency;