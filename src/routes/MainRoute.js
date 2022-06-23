import Axios from 'axios';
import React, {useEffect,useState} from 'react';
import '../App.css';

import {useNavigate} from 'react-router-dom';

function MainRoute() {

  const [cryptolist,setcryptolist]= useState([]);

  useEffect(()=>{
    Axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=20').then(response=>{
      setcryptolist(response.data['data']);
    });


  },[])

  let navigate = useNavigate();


  return (
   
    <>
        <div className="header">
          <h1>Cryptoland</h1>
          <hr></hr>
        </div>

        <div className="cryptolist">

            {cryptolist.map((coin)=>{
              return (
              <div onClick={()=>{
                navigate(`/currency/${coin.id}`);
              }}>
                <h3>{coin.name}</h3>
                <h3>{coin.symbol}</h3>
                <h3>{coin.price_usd} USD</h3>
              </div>)
            })}

        </div>

     
    </> 

  );
}

export default MainRoute;