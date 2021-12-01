import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from 'components/MaterialTableIcons/MaterialTableIcons';
import SpanStatus from './SpanStatus';
import {
    SEARCH_PLACEHOLDER,
    TABLE_TITLES,
    TABLE_FIELDS,
    TABLE_TYPES,
    CURRENCY,
    HEADER_STYLE,
    IMAGE_ID,
    CLASS_NAMES,
    PAGINATION,
} from '../OrdersComponentConstants';
import { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import { getOrders } from 'services/api';
import { COMBOBOX_STATUS } from '../OrdersComponentConstants';

const OrdersTableAdmin = (props) => {
    const { token, orders, setOrders } = useContext(StoreContext)

    return (
        <div className={CLASS_NAMES.CARD_CART}>
            <div className={CLASS_NAMES.CARD_CART_COL}>
                <MaterialTable
                    columns={[
                        {
                            title: TABLE_TITLES.IMAGE,
                            field: TABLE_FIELDS.IMAGE,
                            render: (rowData) => <img id={IMAGE_ID} src={rowData.imageUrl} alt=""/>,
                            cellStyle: {
                                textAlign:'center',
                            },
                            sorting: false,
                            editable: 'never'
                        },
                        {
                            title: TABLE_TITLES.NUMERO,
                            field: TABLE_FIELDS.NUMERO,
                            type: TABLE_TYPES.NUMERIC,
                            cellStyle: {
                                textAlign:'center',
                            },
                            editable: 'never'
                        },
                        {
                            title: TABLE_TITLES.PRECO,
                            field: TABLE_FIELDS.PRECO,
                            render: (rowData) => `${CURRENCY} ${parseFloat(rowData.amount).toFixed(2)}`,
                            type: TABLE_TYPES.NUMERIC,
                            cellStyle: {
                                textAlign:'center',
                            },
                            editable: 'never'
                        },
                        {
                            title: TABLE_TITLES.CLIENTE,
                            field: TABLE_FIELDS.CLIENTE,
                            cellStyle: {
                                textAlign:'center',
                            },
                            editable: 'never'
                        },
                        {
                            title: TABLE_TITLES.STATUS,
                            field: TABLE_FIELDS.STATUS,
                            render: (rowData) => 
                            <SpanStatus
                                theme={rowData.theme}
                                orderId={rowData.id}
                            >
                                {rowData.status}
                            </SpanStatus>,
                            cellStyle: {
                                textAlign:'center',
                            },
                            lookup: COMBOBOX_STATUS
                        }
                    ]}
                    data={props.ordersArray}
                    title={TABLE_TITLES.TITULO_TABELA}
                    options={{
                        pageSize: 10,
                        headerStyle: HEADER_STYLE
                      }}
                    localization={{
                        toolbar: {
                            searchPlaceholder: SEARCH_PLACEHOLDER
                    },
                    header: {
                        actions: ''
                    },
                    pagination: PAGINATION,
                    body: {
                        emptyDataSourceMessage: 'Nenhum pedido para ser exibido'
                    }
                    }}
                    icons={tableIcons}
                    editable={{
                        onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
                            const dataUpdate = [...orders];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            props.onChangeStatus(token, oldData.id ,newData.status)
                            setTimeout(() => {
                                resolve();
                              }, 1000)
                        }).then(getOrders(token).then(response => {
                                setOrders(response.data)
                            }))
                    }}
                />
            </div>
        </div>
    );
};

export default OrdersTableAdmin;