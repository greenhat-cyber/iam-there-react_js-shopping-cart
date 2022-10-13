import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { decrement, increment } from '../redux/cart';


function Cart() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
     
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      console.log(response);
      setProduct(await response.json());

    }
    getProduct()
    // eslint-disable-next-line
  }, [])


  const {cartCount} = useSelector((state) => state.cart);
  console.log(cartCount);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Products</th>
              <th scope="col">Details</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <th scope="row"  >{cartCount}</th>
              <td><img src={product.image} alt="" style={{ height: "6rem" }} /></td>
              <td><p>{product.title}</p></td>
              <td><button className='btn btn-outline-info pe-4 ps-2' onClick={() => dispatch(decrement())}>-</button  > {cartCount} <button className='btn btn-outline-info' onClick={() => dispatch(increment())}>+</button></td>
              <td>${product.price}</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Cart