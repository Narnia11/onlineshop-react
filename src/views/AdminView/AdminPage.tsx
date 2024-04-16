import React, { useId, useState } from "react"
import avatar from './imgav/avatar.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../interfaces";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firestore-config";
import { useForm } from "react-hook-form";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import{v4} from "uuid";
import "./Admin.css"

export default function AdmingPage(){
    const [Url,SetUrl]=useState('')
    const [imageUpload,setImageUpload]= useState<any>()
    const productCollectionRef= collection(db,"Products")



    const uploadImage=()=>{

        if (imageUpload==null)return;
                    const imageRef=ref(storage,`${imageUpload.name +v4()}`)
                    uploadBytes(imageRef,imageUpload)
                  .then(()=>{
                        alert("Image uploaded.")
                   getDownloadURL(imageRef).then((url:any)=>{
                            SetUrl(url)
                            // setFormData({...formData,[formData.imgSrc]:url})
                            // console.log(url+"url ")
                            // formData.imgSrc=url
                        }) 
                    } )  
        
    }

    // console.log(Url+ "second")
    
    const[formData, setFormData]=useState<IProduct>( {
        id:useId(),
        category:"",
        subCategory:"",
        name:"", 
        price:0,
        imgSrc:"",
        date:new Date(),
        purchased:false,
        liked:false
    })

    

    const{ register, handleSubmit, formState:{errors}}=useForm({
        defaultValues:{
          name:"",
          category:"",
          subCategory:"",
          price:""
        }
      });
    //   const formSubmit=async(event:any) => {
    //     event.preventDefault();
    //     await addDoc(productCollectionRef, formData)  
    // }
    const handleChange=(event:any)=>{
        const {name}=event.target
        setFormData({...formData,[name]:event.target.value})
        // console.log(formData)
      }
      
    let navigate = useNavigate()
   
  
    return(
        <>
      
        <div className="grid-container">
        <div className="side">
            <h1>Admin</h1>
            <hr color="#20718A"  />
            <h3>Profile</h3>
            <hr color="#20718A"  />
            <h3>Categories</h3>
            <hr color="#20718A"  />
            <h3 onClick={()=>navigate("/ProductView")}>View all products</h3>
            <hr color="#20718A"  />
            <h3 className="thisPage">Add new product</h3>
            <hr color="#20718A"  />
            <h3>show user</h3>
            <hr color="#20718A"  />

            
            
        </div>
        <div className="maingrid">

            <div className=" rubrik">
                <img className="avatar" src={avatar} alt="avatar woman" />
                <h1>Add new product</h1>
            </div>

            <form className="form-container"
             onSubmit={handleSubmit(async() => {
             
                formData.imgSrc=Url
                await  addDoc(productCollectionRef, formData) 
                // console.log(formData.imgSrc+ "test")
                alert("Product added!")
            
            })} >

                <div>
                <label >Enter product name </label>
                <input
                 type="text" 
                 value={formData.name} 
                 placeholder=" Enter product name"
                 {...register("name",{required:"This is required"})}
                 onChange={handleChange} 
                 name="name"
                 />
                  <p className='error'>{errors.name?.message}</p>
                </div>
               <div>
                 <label>Enter product price</label>
                 <input
                  value={formData.price}
                   type="number"
                    placeholder=" Enter product price"
                    {...register("price",{required:"This is required"})}
                    onChange={handleChange} 
                    name="price"
                    />
                  <p className='error'>{errors.price?.message}</p>

               </div>

               <div>
               <label>Choose a category </label>
                <select
                
                 value={formData.category} 
                 {...register("category",{required:"This is required"})}
                 onChange={handleChange} 
                 name="category"
                 >
                    <option value=""></option>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Sport">Sport</option>
                    <option value="Accesories">Accesories</option>
                </select>
                <p className='error'>{errors.category?.message}</p>

               </div>

               <div>
               <label>Choose a subcategory </label>
                <select
                 value={formData.subCategory} 
                 {...register("subCategory",{required:"This is required"})}
                 onChange={handleChange} 
                 name="subCategory"
                 >
                    <option value=""></option>
                    <option value="Dresses">Dresses</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Bags">Bags</option>
                    <option value="Skirts">Skirts</option>
                    <option value="Sport">Sport</option>
                    <option value="Under Wear">Under Wear</option>
                    <option value="Bottoms">Bottoms</option>

                </select>
                <p className='error'>{errors.subCategory?.message}</p>

               </div>
               
               
                <div className="imageDiv">
               <div>
                 <p>Upload Product Images </p>
              
              <input 
              type="file" 
              name="imgSrc"
              onChange={(event)=>{
                 const files = event.target.files;
                  setImageUpload(files?.item(0))
                 

                  }}
                   /></div>
                <button className="UploadBtn" onClick={ uploadImage} >Upload Image</button>
                </div>
              {/* <a href={Url}>{Url}</a> */}
               
                <Button  type="submit" variant="contained">Add Product</Button>

            </form>
            

        </div>
        </div>

        </>
    )

}