import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import drinks from './drinks.css'
import { useNavigate } from 'react-router-dom';
export default function DrinksDetail() {

    const params = useParams();
    const [dDetail , setdDetail] =useState([]);
    console.log(params.id);

    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ params.id}`)
        .then((response)=> response.json()).then((data)=>{
            console.log(data.drinks)
            setdDetail(data.drinks)
        }).catch((error) =>console.log(error))
    },[])
     

    
      

    return (
        <div className='post'>{
            
           
            dDetail.map((e)=>{ 
               
            return(
                   <div className='desc'>
 <h1 className='txt'>DRINK DESCRIPTION</h1>
    
 <h1>{e.strDrink}</h1>
    <h2>{e.strCategory}</h2>
    <h2>{e.strAlcoholic}</h2>
    <p>{e.strInstructions}</p>
    <img src={e?.strDrinkThumb} height='400px'></img>

    
                  </div>
   
                )
    
        })
    
    }
        </div>
       
         
        
        
      )
  };

