import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';


function Products() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const respones = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await respones.clone().json())
                setFilter(await respones.json())
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>

                <div className="col-md-3">
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
                </div>

            </>
        )
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
                    <div className="button btn btn-outline-dark me-2">All</div>
                    <div className="button btn btn-outline-dark me-2">Men's Clothing</div>
                    <div className="button btn btn-outline-dark me-2">Women's Clothing  </div>
                    <div className="button btn btn-outline-dark me-2">Jewelery  </div>
                    <div className="button btn btn-outline-dark me-2">Electronic  </div>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb4">
                                <div clasclassNames="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height='250px' />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0 ">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold ">${product.price}</p>
                                            <a href="www" className="btn btn-outline-dark">Bu Now</a>
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
