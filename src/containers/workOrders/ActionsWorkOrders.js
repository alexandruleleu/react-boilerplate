export const actionTypes = {
    REQUEST_WORK_ORDERS: 'REQUEST_WORK_ORDERS',
};

export function requestWorkOrders() {
    return {
        type: actionTypes.REQUEST_WORK_ORDERS,
    };
}