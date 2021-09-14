import React from 'react'

const CreatePastel = (props) => {
    return (
        <div class="card">
            <div class="card__image-container">
                <img src={props.image} alt="pastel" />
            </div>
            <div class="card__content">
                <h3>{props.name}</h3>
            </div>
            <div class="card__info">
                <p>{props.info}</p>
                <p class="card__price">{props.price}</p>
            </div>
        </div>
    )
} 
export default CreatePastel