import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({data}) => {
  console.log(data)
  return (
    <>
        {
            data?.map((item, index) => (
                <ProductCard key={index} item={item}/>
            ))
        }
    </>
  );
}

export default ProductsList