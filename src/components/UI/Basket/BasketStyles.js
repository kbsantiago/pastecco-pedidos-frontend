import styled from 'styled-components';

export const BasketHeader = styled.h2`
    width: 323px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 95px;
    left: 20px;
    font-family: Roboto;
    font-weight: Medium;
    font-size: 30px;
    opacity: 1;
    text-align: left;
`;

export const SeparatorLine = styled.div`
    width: 317px;
    height: 4px;
    background: rgba(215,215,225,0.8500000238418579);
    opacity: 1;
    position: absolute;
    top: 147px;
    left: 29px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
`;

export const BasketWrapper = styled.div`
    width: 392px;
    height: 842px;
    background: linear-gradient(rgba(250,236,233,1), rgba(255,253,252,1));
    opacity: 1;
    position: absolute;
    top: 6px;
    left: 13px;
    overflow: hidden;
`;

export const OrdersWrapper = styled.div`
    width: 340px;
    height: 390px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 193px;
    left: 20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    overflow: hidden;
`;

export const DescriptionP = styled.p`
    width: 112px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 220px;
    left: 115px;
    font-family: Roboto;
    font-weight: Medium;
    font-size: 18px;
    opacity: 1;
    text-align: center;
`;

export const PriceP = styled.p`
    width: 60px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 252px;
    left: 290px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: center;
`;

export const AddProductButton = styled.div`
    width: 105px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 255px;
    left: 115px;
    font-family: Avenir;
    font-weight: Heavy;
    font-size: 12px;
    opacity: 1;
    text-align: center;
`;
export const TotalOrders = styled.p`
    width: 169px;
    color: url("../images/v3_2247.png");
    position: absolute;
    top: 438px;
    left: 181px;
    opacity: 1;
    text-align: center;
`;

export const SubTotalOrders = styled.p`
    width: 169px;
    color: url("../images/v3_2247.png");
    position: absolute;
    top: 410px;
    left: 181px;
    opacity: 1;
    text-align: center;
`;

export const OrangeSeparatorBar = styled.p`
    width: 340px;
    height: 25px;
    background: rgba(255,120,91,1);
    opacity: 1;
    position: absolute;
    top: 578px;
    left: 20px;
`;

export const KeepBuyingText = styled.h2`
    width: 141px;
    color: rgba(255,120,91,1);
    position: absolute;
    top: 0px;
    left: 24px;
    font-family: Roboto;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: right;
`;