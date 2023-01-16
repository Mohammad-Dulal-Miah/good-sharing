import React, { useEffect, useState } from 'react';
import './Profile.css';
import person from '../../images/person.jpg';
import { findObj, findUser } from '../../CustomHook/utilities';
import GetUser from '../../CustomHook/getUser';
import GetProducts from '../../CustomHook/getProducts';

const Profile = () => {


    const user1 = findUser();

    const personInfo = GetUser(user1);

    const [selectProduct, setSelectProduct] = useState([])
    const products = GetProducts();


    useEffect(() => {
        const storedCart = findObj();
        const cart = [];

        for (const id in storedCart) {


            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {

                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                cart.push(addedProduct);
            }
        }
        setSelectProduct(cart);
    }, [products])


   const total = selectProduct.reduce((initial , product) => product.rentPrice*product.quantity+initial , 0);
  

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-4 col-sm-4'>
                    <img src={person} className="img-fluid" alt="" />
                </div>
                <div className='col-md-4 col-sm-4 mt-5'>
                    <h1>{personInfo.name}</h1>
                    <h4>{personInfo.city}</h4>
                    <p><small>Word no: {personInfo.word}</small></p>
                    <p>Email:{personInfo.email}</p>
                </div>
                <div className='col-md-4 col-sm-4 cart mt-5'>
                    <h3>Total price: {total}</h3>
                    <button className='btn btn-danger'>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;