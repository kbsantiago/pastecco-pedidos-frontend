import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import SpanStatus from './components/SpanStatus';
import OrdersTable from './components/OrdersTable';
import { THEMES, IMAGE_URL, STATUS } from './OrdersComponentConstants';

const OrdersComponent = (props) => {
    const { username } = useContext(StoreContext)

    function isCostumerOrder(tableData) {
        if (tableData.costumerName === username) {
            return tableData
        }
      }

    const ordersArray = props.orders.map((order) => {
        let theme = ''
        if (order.status === STATUS.FINALIZADO) {
            theme = THEMES.FINALIZADO
        }
        else if (order.status === STATUS.EM_ANDAMENTO) {
            theme = THEMES.EM_ANDAMENTO
        }
        else if (order.status === STATUS.CRIADO) {
            theme = THEMES.CRIADO
        }
        const tableData = {
            imageUrl: IMAGE_URL,
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
                <OrdersTable
                    ordersArray={ordersArray.filter(isCostumerOrder)}
                />
    );
                    
};

export default OrdersComponent;