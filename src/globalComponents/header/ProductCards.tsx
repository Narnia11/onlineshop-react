
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
 import "../../views/AdminView/Admin.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IProduct } from '../../interfaces';
import { Link } from "react-router-dom";
import placeholder from "../../views/AdminView/imgav/istockphoto-1222357475-612x612.jpg"




interface props{
    product:IProduct
    productCollectionRef:any
    getProducts:any
}


export default function ProductCards({product,productCollectionRef,getProducts}:props){
  
  const handleClick= async(product:IProduct)=>{
    await updateDoc(doc(productCollectionRef,product.id),{liked:!product.liked})
   {getProducts()}
 }

    return(
        <>
   
      <Card sx={{width: 220, margin:3 , height:300}}>
       
      <CardActionArea>
      <Link to={`/product/${product.id}`}>
      <CardMedia
         sx={{ height: 200 }}
        // image={product.imgSrc}
        image= {placeholder}
        title={product.name}
      />
      </Link>
        <CardContent>
       
          <hr />
              <div className="underCard">
            <div className='nameHeart' >
                 <Typography   sx={{fontSize:13, margin:0, padding:0}} gutterBottom  component="div">
                   {product.name}
                 </Typography>
             <FavoriteIcon   onClick={()=>handleClick(product)} className="heart"
             style={{color: product.liked===true? 'red':'gray'}} /> 
            </div>
            <span >{product.price}kr</span>
            </div>
       
        </CardContent>
      </CardActionArea>
    </Card>
    </>
    )
}