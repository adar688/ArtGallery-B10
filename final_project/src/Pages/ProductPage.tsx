export const revalidate=0; 

import React from 'react';
import { products } from "@/Utils/products";
import getProductById from '@/actions/getProductById';
import NullDataError from '../components/General/NullDataError';
import Container from '../components/General/Container';
import ProductDetails from '../components/Products/ProductDetails';

interface IParams {
    productId?: string;
};

const Product = async ({ params }: { params: IParams }) => {

    //const product = await getProductById(params);
    const { productId } = params; // Extract productId from params

    if(!productId){
        return <NullDataError title='Oops! Product with the given id does not exist'/>
    }

    const product = await getProductById({ productId }); // Pass productId to getProductById
    
    return (
        <div className="p-16"> {/* Adjusted padding */}
            <Container>
                 {/* Render ProductDetails if product is found, otherwise show a message */}
                 {product ? (
                    <ProductDetails product={product} />
                ) : (
                    <p>Product not found.</p>
                )}
            </Container>
        </div>
    );
};

export default Product;
