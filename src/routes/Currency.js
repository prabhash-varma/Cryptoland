import Axios from 'axios';
import React, {useEffect,useState} from 'react';
import '../App.css';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

import {useParams} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Currency() {

  

  const classes=useStyles();


    const [coindata,setcoindata]=useState({});
    const [post,setPost]=useState(false);
  
    let {id} = useParams();

  useEffect(()=>{
    Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then(response=>{
      setcoindata(response.data[0]);
      console.log(response.data[0]);
      setPost(true);
    });    
   
  },[]);


  return (
    

        
     
    <>

    {post ? (
    <>
    <h1>Name: {coindata.name}</h1>
    <h1>Symbol: {coindata.symbol}</h1>
    <h1>Rank: {coindata.rank}</h1>
    <h1>Price: {coindata.price_usd}</h1>
    </>)
    
    : 
    
    (
      <Backdrop className={classes.backdrop} open>
      <CircularProgress color="inherit" />
    </Backdrop>

    )}

    
   
    </>
  );
}

export default Currency;