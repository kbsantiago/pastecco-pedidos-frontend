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
} from '../OrdersComponentConstants';

const OrdersTable = (props) => {
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
                            sorting: false
                        },
                        {
                            title: TABLE_TITLES.NUMERO,
                            field: TABLE_FIELDS.NUMERO,
                            type: TABLE_TYPES.NUMERIC,
                            cellStyle: {
                                textAlign:'center',
                            },
                        },
                        {
                            title: TABLE_TITLES.PRECO,
                            field: TABLE_FIELDS.PRECO,
                            render: (rowData) => `${CURRENCY} ${parseFloat(rowData.amount).toFixed(2)}`,
                            type: TABLE_TYPES.NUMERIC,
                            cellStyle: {
                                textAlign:'center',
                            },
                        },
                        {
                            title: TABLE_TITLES.CLIENTE,
                            field: TABLE_FIELDS.CLIENTE,
                            cellStyle: {
                                textAlign:'center',
                            }
                        },
                        {
                            title: TABLE_TITLES.STATUS,
                            field: TABLE_FIELDS.STATUS,
                            render: (rowData) => <SpanStatus theme={rowData.theme} contenteditable="false">{rowData.status}</SpanStatus>,
                            cellStyle: {
                                textAlign:'center',
                            }
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
                    }
                    }}
                    icons={tableIcons}
                />
            </div>
        </div>
    );
};

export default OrdersTable;