import React from 'react';
import {
    CardContent,
    CardDiv,
    CardImageContainer,
    CardImg,
    CardInfo,
    CardH3,
    CardP,
    CardPrice,
} from '../../SharedStyles'

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
                <CardH3>
                    {props.title}
                </CardH3>
            </CardContent>
            <CardInfo>
                <CardP>
                    {props.description}
                </CardP>
            <CardInfo>
                <CardPrice>
                    {props.price}
                </CardPrice>
            </CardInfo>
            </CardInfo>
        </CardDiv>
    );
}

export default Card;