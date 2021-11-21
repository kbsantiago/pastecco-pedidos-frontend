import React, { useContext } from 'react';
import MaterialTable from 'material-table';
import StoreContext from 'components/Store/Context';
import SpanStatus from 'components/SpanStatus/SpanStatus';
import tableIcons from 'components/MaterialTableIcons/MaterialTableIcons';

const Orders = (props) => {
    const { username } = useContext(StoreContext)
    const ordersArray = props.orders.map((order) => {
        if (username === order.customerName) {
            return (
                {
                    imageUrl: "https://imagensemoldes.com.br/wp-content/uploads/2020/05/Desenho-Pastel-PNG.png",
                    number: order.number,
                    costumerName: order.customerName,
                    status: <SpanStatus
                        theme='contained-green-disabled'
                    >{order.status}
                    </SpanStatus>,
                }
            )
        } return null
        
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
                    data={ordersArray}
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

export default Orders;