import React from 'react'
import MaterialTable from 'material-table';

import tableIcons from 'components/MaterialTableIcons/MaterialTableIcons';

const CartTable = (props) => {
    return (
        <MaterialTable
            columns={[
                {
                    title: '',
                    field: 'imageUrl',
                    render: (rowData) => <img id="pastel" src={rowData.imageUrl} alt=""/>,
                    cellStyle: {
                        textAlign:'center',
                    },
                },
                {
                    title: 'Produto',
                    field: 'title',
                    cellStyle: {
                        textAlign:'center',
                    },
                },
                {
                    title: 'Quantidade',
                    field: 'quantityComponent',
                    cellStyle: {
                        textAlign:'center',
                    }
                },
                {
                    title: 'Preço',
                    field: 'price',
                    cellStyle: {
                        textAlign:'center',
                    }
                },
                {
                    title: 'Remover',
                    field: 'removeComponent',
                    cellStyle: {
                        textAlign:'center',
                    }
                }
            ]}
            data={props.productsArray}
            title="Pedidos"
            options={{
                pageSize: 5,
                headerStyle: {
                    textAlign: 'center',
                    flexDirection: 'row',
                }
            }}
            localization={{
                toolbar: {
                    searchPlaceholder: 'Digite o nome do produto'
            }
            }}
            icons={tableIcons}
        />
/*         <div className="rowCart border-top border-bottom">
            <div className="rowCart mainCart align-items-center">
                <div className="col-2Cart"><img className="img-fluid" src={props.imgPath} alt='/' /></div>
                <div className="colCart">
                    <div className="rowCart text-muted">{props.title}</div>
                </div>
                <div className="colCart"> 
                    <UIButton onClick={() => removeQuantityToCartItem(props.title, props.price)}>-</UIButton>
                    <div className="quantity">{props.quantity}</div>
                    <UIButton onClick={() => addQuantityToCartItem(props.title, props.price)}>+</UIButton>
                </div>
                <div className="colCart">
                    <div className="itemprice">{props.price * props.quantity}</div>
                    <UIButton
                        onClick={() => removeItemToCart(props.title)}
                        className="close">
                            <FaRegTrashAlt />
                    </UIButton>
                </div>
            </div>
        </div> */
    )
}

export default CartTable