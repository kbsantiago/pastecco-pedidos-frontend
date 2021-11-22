import React, { useContext } from 'react';
import {
    CardContent,
    CardDiv,
    CardImageContainer,
    CardImg,
    CardTitle,
    CardDescription,
    ButtonDiv,
} from './CardStyles'
import UIButton from '../Button/Button';
import { ADD_TO_BASKET_BUTTON, THEME, IMG_ALT } from './CardConstants';
import StoreContext from 'components/Store/Context';

const Card = (props) => {
    const { addItemToCart } = useContext(StoreContext)

    return (
        <CardDiv>
            <CardImageContainer>
                <CardImg
                    src={props.imgPath}
                    alt={IMG_ALT}
                />
            </CardImageContainer>
            <CardContent>
                <CardTitle>
                    {props.title}
                </CardTitle>
            </CardContent>
            <CardDescription>
                {props.description} <b>R$ {parseFloat(props.price).toFixed(2)}</b>
            </CardDescription>
            <ButtonDiv>
                <UIButton
                    onClick={() => addItemToCart(props.title, props.price, 1, props.imgPath, props.productId)}
                    theme={THEME}
                >
                    {ADD_TO_BASKET_BUTTON}
                </UIButton>
            </ButtonDiv>
        </CardDiv>
    );
}

export default Card;