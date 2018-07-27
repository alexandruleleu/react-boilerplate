import { actionTypes } from './ActionsWorkOrders';

export default function workOrdersReducer(state = {
    isFetching: false,
    editMode: false,
    formState: {},
}, action) {

    switch (action.type) {
        case actionTypes.REQUEST_WORK_ORDERS:
            return Object.assign({}, state, { isFetching: true });
        default:
            return state;
    }
    
}
