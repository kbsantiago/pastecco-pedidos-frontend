import React, { useContext } from 'react';
import UIButton from 'components/Button/Button';
import StoreContext from 'components/Store/Context';
import { FaRegTrashAlt } from 'react-icons/fa';
import '../CartComponent.css';

const RemoveItem = (props) => {
    const {
        removeItemToCart,
    } = useContext(StoreContext)

    return (
        <>
        <UIButton
            onClick={() => removeItemToCart(props.title)}
            className="close"
        >
            <FaRegTrashAlt/>
        </UIButton>
        </>
    );
};

export default RemoveItem;