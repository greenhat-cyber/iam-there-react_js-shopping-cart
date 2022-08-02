import React, {useState, useEffect} from 'react'


function Products() {

    const [data, setData] =useState([])
    const [filter, setFilter] =useState(data)
    const [loading, setLoading] =useState(false)
    let componentMounted = true;

    useEffect(()=>{

        const getProducts = async() =>{
            setLoading(true);
            const respones = await fetch("https://fakestoreapi.com/products");
            if (componentMounted){
                setData(await respones.clone().json())
                setFilter(await respones.json())
                setLoading(false);
                console.log(filter);
            }

            return () =>{
                componentMounted = false;
            }
        }
        getProducts()
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Products
