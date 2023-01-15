import React, { useState } from 'react';
import { addToLocal } from '../../CustomHook/utilities';
import './ProductInformation.css';



const ProductInformation = ({ product}) => {
    const { id, name, rentPrice, price, img, stock, rating } = product;

    const[add , setAdd] = useState(false);

    const list = [];

    for (var i = 1; i <= rating; i++) {
        list.push(i);
    }

    
    const addToProduct = (event) => {
        event.preventDefault();

        const value1 = event.target.first.checked;
        const value2 = event.target.second.checked;

       if(value1 && value2){
        alert("Please chose only one plan...");
       }
       else if(!value1 && !value2){
        alert("please chose plan..")
       }
       else{
           if(value1){
                addToLocal(id);
                setAdd(true);
           }
           else{
                addToLocal(id);
                setAdd(true);
           }
       }
    }




    return (
        <div className='product-container my-5 p-5'>

            <div>
                <div className='image-div'>
                    <img src={img} alt="" height='100' width='100' className='mx-auto' />
                </div>

                <div className='m-3 information-div'>
                    <h3>{name}</h3>
                    <h5><small>Rent Price:{rentPrice}</small></h5>
                    <p><small>Price:{price}</small></p>
                    <p>Stock:{stock}</p>
                    <p>Rating: {rating} stars</p>
                </div>
            </div>

            <form onSubmit={addToProduct}>
                <h4>Choose your plan:</h4>

                <div>
                    <input type="checkbox" id="first" name="first"/>
                        <label for="first">1</label>
                </div>

                <div>
                    <input type="checkbox" id="second" name="second"/>
                        <label for="second">2</label>
                </div>
                <input type="submit" value="Add to Cart" className='btn btn-danger'/>
                {
                    add &&<p className='text text-success'>Thanks for add to cart...</p>
                }
            </form>

        </div>
    );
};

export default ProductInformation;