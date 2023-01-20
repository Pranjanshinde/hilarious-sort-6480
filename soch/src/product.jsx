import axios from "axios";
import { useState,useEffect } from "react";
import Productcard from "./productcard";


const Products = () =>{
    const [prod,setProd]=useState([]);

    function Getdata(){
        axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setProd(response.data);
  })
    }

    useEffect(()=>{
        Getdata();
    },[])


    return(
        <>
        Productpage
<div>
    {
prod.map((item) => {
return(
    <Productcard  image={item.image} title={item.title} desc={item.description} price={item.price}  />
)
})
    }
</div>
        </>
    )
}

export default Products;