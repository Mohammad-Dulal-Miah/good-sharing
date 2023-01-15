import { useEffect, useState } from "react"

const GetProducts = () => {

   const [products, setProducts] = useState([]);

   useEffect(() => {

      fetch('http://localhost:4000/get')
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [])

   return products;
}


export default GetProducts;