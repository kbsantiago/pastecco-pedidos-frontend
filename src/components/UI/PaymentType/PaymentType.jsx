import React from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const PaymentType = (props) => {

    return (
        <>
        <h4>Escolha sua forma de pagamento</h4>
        <RadioGroup onChange={props.onChangeValue} horizontal>
            <RadioButton value="money">
                Dinheiro
            </RadioButton>
            <RadioButton value="credit card">
                Cartão de Débito
            </RadioButton>
            <RadioButton value="debit card">
                Cartão de Crédito
            </RadioButton>
        </RadioGroup>
        </>
    );
}

export default PaymentType