import React, { useContext } from 'react';
import MaterialTable from 'material-table';
import StoreContext from 'components/Store/Context';
import SpanStatus from 'components/SpanStatus/SpanStatus';
import tableIcons from 'components/MaterialTableIcons/MaterialTableIcons';

const OrdersComponent = (props) => {
    const { username } = useContext(StoreContext)

    function isCostumerOrder(tableData) {
        if (tableData.costumerName === username) {
            return tableData
        }
      }

    const ordersArray = props.orders.map((order) => {
        let theme = ''
        if (order.status === 'finalizado') {
            theme = 'contained-green-disabled'
        }
        else if (order.status === 'em andamento') {
            theme = 'contained-orange-disabled'
        }
        else if (order.status === 'criado') {
            theme = 'contained-red-disabled'
        }
        const tableData = {
            imageUrl: "https://imagensemoldes.com.br/wp-content/uploads/2020/05/Desenho-Pastel-PNG.png",
            number: order.number,
            amount: order.amount,
            costumerName: order.customerName,
            status: <SpanStatus
                theme={theme}
                contenteditable="false"
            >{order.status}
            </SpanStatus>,
        }
        return tableData
    });

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
                    data={ordersArray.filter(isCostumerOrder)}
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

export default OrdersComponent;