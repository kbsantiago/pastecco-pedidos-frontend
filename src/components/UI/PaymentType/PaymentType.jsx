import React from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './PaymentType.css';

const PaymentType = (props) => {

    return (
        <>
        <h4 className="radio-title">Escolha sua forma de pagamento</h4>
        <RadioGroup onChange={props.onChangeValue} horizontal>
            <RadioButton pointColor={'red'} value="money">
                Dinheiro
            </RadioButton>
            <RadioButton pointColor={'red'} value="credit card">
                Cartão de Débito
            </RadioButton>
            <RadioButton pointColor={'red'} value="debit card">
                Cartão de Crédito
            </RadioButton>
        </RadioGroup>
        </>
    );
}

export default PaymentType