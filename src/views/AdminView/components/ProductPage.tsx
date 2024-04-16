import { IProduct } from "../../../interfaces"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import "../Admin.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DocumentData, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firestore-config";


interface props{
    product:IProduct
    // handleClick:(product:IProduct)=>void
    productCollectionRef:any
    getProducts:any
}


export default function ProductPage({product,productCollectionRef,getProducts}:props){
  
  const handleClick= async(product:IProduct)=>{
    await updateDoc(doc(productCollectionRef,product.id),{liked:!product.liked})
   {getProducts()}
 }

    return(
        <>
   
      <Card sx={{width: 220, margin:3 , height:320}}>
       
      <CardActionArea>
      <CardMedia
         sx={{ height: 200 }}
        image={product.imgSrc}
        title={product.name}
      />
        <CardContent>
       
          <hr />
              <div className="underCard">
            <div className="new-item__content">
              {/* {product.name} */}
                 <Typography   sx={{fontSize:13, margin:0, padding:0}} gutterBottom  component="div">
            {product.name}
          </Typography>
             <FavoriteIcon   onClick={()=>handleClick(product)} className="heart"
             style={{color: product.liked===true? 'red':'gray'}} /> 
            </div>
            <span >{product.price}kr</span>
            </div>
          {/* <Typography sx={{ marginBottom:2 }}variant="body2" color="text.secondary">
           {product.price} kr
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
    </>
    )
}