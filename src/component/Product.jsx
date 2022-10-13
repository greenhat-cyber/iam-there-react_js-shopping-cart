import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { addToCart } from '../redux/cart';


function Product() {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();



    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct()
        // eslint-disable-next-line
    }, [])


    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )

    }


    const ShowProduct = () => {

        const dispatch = useDispatch();


        return (
            <>
                <div className="col-md-6 mt-5">
                    <img src={product.image} alt={product.title} height="400px" width='400px' />

                </div>
                <div className="col-md-4 mt-5">
                    <h4 className='text-uppercase text-black-50' >
                        {product.category}
                    </h4>
                    <h1 className='display-5' >{product.title}</h1>
                    <p className='lead fw-bolder ' >
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                    <p className='lead' >{product.description}</p>

                    <NavLink to={`/cart/${product.id}`} ><button className='btn btn-outline-dark px-4 py-2 ' onClick={() => dispatch(addToCart())}> Add to Cart </button></NavLink>
                    <NavLink className='btn btn-outline-dark ms-2 px-3 py-2 ' to='/cart ' > Go to Cart </NavLink>


                </div>
            
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product
