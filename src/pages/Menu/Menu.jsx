import React, { useEffect, useState, useContext } from 'react';
import StoreContext from 'components/Store/Context';
import Header from 'components/UI/Header/Header';
import CardWrapper from 'components/UI/CardWrapper/CardWrapper';
import { getProducts } from 'services/api';

const PagesMain = () => {
    
    const [productsState, setProducts] = useState([]);
    const { token } = useContext(StoreContext);

    useEffect(() => {
        console.log(token)
        getProducts(token).then(response => {
            setProducts(response.data)
        })
    }, [token]);
    
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