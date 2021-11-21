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
                    render: (rowData) => <img id="pastel-tabela" src={rowData.imageUrl} alt=""/>,
                    cellStyle: {
                        textAlign:'center',
                    },
                },
                {
                    title: 'Produto',
                    field: 'title',
                    cellStyle: {
                        textAlign:'center',
                        fontSize:16,
                    },
                },
                {
                    title: 'Quantidade',
                    field: 'quantityComponent',
                    cellStyle: {
                        textAlign:'center',
                    },
                },
                {
                    title: 'Preço',
                    field: 'price',
                    cellStyle: {
                        textAlign:'center',
                        fontSize: '18px'
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
            title={`Carrinho ( ${props.cartTotalItems} )`}
            options={{
                pageSize: 5,
                headerStyle: {
                    textAlign: 'center',
                    flexDirection: 'row',
                }            }}
            localization={{
                toolbar: {
                    searchPlaceholder: 'Digite o nome do produto'
            }
            }}
            icons={tableIcons}
        />
    )
}

export default CartTable