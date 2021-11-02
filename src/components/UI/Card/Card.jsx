import React from 'react';
import {
    CardContent,
    CardDiv,
    CardImageContainer,
    CardImg,
    CardInfo,
    CardTitle,
    CardDescription,
    CardPrice,
} from './CardStyles'
import UIButton from '../Button/Button';
import { CARD_CONSTANTS } from './CardConstants'

const Card = (props) => {
    return (
        <CardDiv>
            <CardImageContainer>
                <CardImg
                    src={props.imgPath}
                    alt="pastel"
                />
            </CardImageContainer>
            <CardContent>
                <CardTitle>
                    {props.title}
                </CardTitle>
            </CardContent>
            <CardInfo>
                <CardDescription>
                    {props.description}
                </CardDescription>
                <CardPrice>
                    R$ {props.price}
                </CardPrice>
            </CardInfo>
            <UIButton
                theme="contained-red"
            >
                {CARD_CONSTANTS.ADD_TO_BASKET_BUTTON}
            </UIButton>
        </CardDiv>
    );
}

export default Card;