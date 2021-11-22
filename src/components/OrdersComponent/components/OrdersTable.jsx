import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from 'components/MaterialTableIcons/MaterialTableIcons';

const OrdersTable = (props) => {
    return (
        <div className="cardCart">
            <div className="col-md-8Cart cartCart">
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
                            title: 'Número',
                            field: 'number',
                            type: 'numeric',
                            cellStyle: {
                                textAlign:'center',
                            },
                        },
                        {
                            title: 'Preço Total',
                            field: 'amount',
                            render: (rowData) => `R$ ${parseFloat(rowData.amount).toFixed(2)}`,
                            type: 'numeric',
                            cellStyle: {
                                textAlign:'center',
                            },
                        },
                        {
                            title: 'Cliente',
                            field: 'costumerName',
                            cellStyle: {
                                textAlign:'center',
                            }
                        },
                        {
                            title: 'Status',
                            field: 'status',
                            cellStyle: {
                                textAlign:'center',
                            }
                        }
                    ]}
                    data={props.ordersArray}
                    title="Pedidos"
                    options={{
                        pageSize: 10,
                        headerStyle: {
                            textAlign: 'center',
                            flexDirection: 'row',
                          }
                      }}
                    localization={{
                        toolbar: {
                            searchPlaceholder: 'Digite o número do pedido'
                    }
                    }}
                    icons={tableIcons}
                />
            </div>
        </div>
    );
};

export default OrdersTable;