import React, { useState, useEffect } from 'react'
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom'
import "./Products.css"


function Products() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line
    let componentMounted = true;
    
    useEffect(() => {
        
        const getProducts = async () => {
            setLoading(true);
            const respones = await fetch("https://fakestoreapi.com/products"); //https://fakestoreapi.com/products  //https://api.storerestapi.com/products
            if (componentMounted) {
                setData(await respones.clone().json())
                setFilter(await respones.json())
                setLoading(false);
                console.log(data);
                
            }
            
            return () => {
                // eslint-disable-next-line
                componentMounted = false;
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>

                {/* <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div> */}

            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }



    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
                    <div className="button btn btn-outline-dark me-2 " onClick={() => {
                        setFilter(data)
                    }} >All</div>
                    <div className="button btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}  >Men's Clothing</div>
                    <div className="button btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")} >Women's Clothing  </div>
                    <div className="button btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")} >Jewelery  </div>
                    <div className="button btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")} >Electronics  </div>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4 pb-1">
                                <div className="card h-100 text-center p-4 shadow-lg card-d " key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height='250px' />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0 ">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold ">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )

    }

    return (
        <div>
            <div className="container my-5 py5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center' >Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center ">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>
        </div>
    )
}

export default Products
