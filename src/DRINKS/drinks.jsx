import React from 'react'
import {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import drinks from './drinks.css'
import { useNavigate } from 'react-router-dom';

export default function Drinks() {
    const navigate = useNavigate();
    const [drink , setDrinks] =useState([]);

    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then((response)=> response.json()).then((data)=>{
            console.log(data.drinks)
            setDrinks(data.drinks)
        }).catch((error) =>console.log(error))
    },[])
    
  return (
    <div className='post'>{
        
 drink.map((e)=>{ 


        return(
            // Passing id 
            <div  onClick={()=>navigate(`/desc/${e?.idDrink}`)}>

  <Card className='card' sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image= {e?.strDrinkThumb}
                      alt="green iguana"
            
                    />
                    <CardContent>
                 
                      <Typography variant="body2" color="text.secondary">
                      {e.strDrink}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
              
            </div>

              


            )

    })

}
    </div>
   
     
    
    
  )
}
