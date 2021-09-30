import React from 'react';
import Header from 'components/UI/Header/Header';
import CardWrapper from 'components/UI/CardWrapper/CardWrapper';
import { useEffect, useState } from 'react';
import { getProducts } from 'services/api';

const PagesMain = () => {
    
    const [productsState, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response.data)
        })
    }, []);
    
    return (
        <>
            <Header />
            <CardWrapper
                cards={productsState}
            />
        </>
    );
};

export default PagesMain;