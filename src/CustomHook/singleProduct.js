import { useEffect, useState } from "react";

const SingleProduct = (productId) => {

    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data[0]))
    }, [productId]);

    return singleProduct;
}

export default SingleProduct;