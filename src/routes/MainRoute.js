import Axios from 'axios';
import React, {useEffect,useState} from 'react';
import '../App.css';

import {useNavigate} from 'react-router-dom';



import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


function MainRoute() {

  const classes=useStyles();
  const [print,setprint]=useState(false);

  const [cryptolist,setcryptolist]= useState([]);

  useEffect(()=>{
    Axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=20').then(response=>{
      setcryptolist(response.data['data']);
      setprint(true);
    });


  },[])

  let navigate = useNavigate();


  return (
   
    <>

     {print ? (
      <>
          <div className="header">
          <h1>Cryptoland</h1>
          <hr></hr>
        </div>

        <div className="cryptolist">
            {cryptolist.map((coin)=>{
              return (
              <div onClick={()=>{
                navigate(`/Cryptoland/currency/${coin.id}`);
              }}>
                <h3>{coin.name}</h3>
                <h3>{coin.symbol}</h3>
                <h3>{coin.price_usd} USD</h3>
              </div>)
            })}

        </div>
        </>
      )
      :
      ( <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>)
      
    }
        

     
      </>

  );
}

export default MainRoute;