import React from 'react';
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
            <CardDescription>
                {props.description} <b>R$ {props.price}</b>
            </CardDescription>
            <ButtonDiv>
                <UIButton
                    theme="contained-red"
                >
                    {CARD_CONSTANTS.ADD_TO_BASKET_BUTTON}
                </UIButton>
            </ButtonDiv>
        </CardDiv>
    );
}

export default Card;