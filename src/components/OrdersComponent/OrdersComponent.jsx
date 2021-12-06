import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import OrdersTable from './components/OrdersTable';
import OrdersTableAdmin from './components/OrdersTableAdmin';
import { THEMES, IMAGE_URL, STATUS } from './OrdersComponentConstants';
import { changeStatus } from '../../services/api';
import { getOrders } from 'services/api';

const OrdersComponent = (props) => {
    const { user, orders, setOrders } = useContext(StoreContext)

    function onChangeStatus(token, orderId, newValue) {
        const requestBody = {
            id: orderId,
            status: `${newValue}`
        }
        changeStatus(token, requestBody)
    }

    function onGetOrders (token){
        getOrders(token).then(response => {
            setOrders(response.data)
        })
    }

    function isCostumerOrder(tableData) {
        if (tableData.costumerName === user.username) {
            return tableData
        }
      }

    const ordersArray = orders.map((order) => {
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
        else if (order.status === STATUS.CANCELADO) {
            theme = THEMES.CANCELADO
        }
        const tableData = {
            id: order.id,
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
        <div>
            {props.user.role==='admin' && (
                <OrdersTableAdmin
                    ordersArray={ordersArray}
                    onChangeStatus={onChangeStatus}
                    onGetOrders={onGetOrders}
                />
            )}
            {props.user.role==='client' && (
                <OrdersTable
                    ordersArray={ordersArray.filter(isCostumerOrder)}
                />
            )}
        </div>
        
    );
                    
};

export default OrdersComponent;