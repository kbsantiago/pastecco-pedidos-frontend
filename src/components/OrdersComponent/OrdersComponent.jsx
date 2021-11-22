import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
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
        else if (order.status === STATUS.PREPARANDO) {
            theme = THEMES.PREPARANDO
        }
        else if (order.status === STATUS.CRIADO) {
            theme = THEMES.CRIADO
        }
        const tableData = {
            imageUrl: IMAGE_URL,
            number: order.number,
            amount: order.amount,
            costumerName: order.customerName,
            status: order.status,
            theme: theme,
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