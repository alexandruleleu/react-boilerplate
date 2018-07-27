import { connect } from 'react-redux';
import WorkOrdersComponent from './WorkOrders';
import { requestWorkOrders } from '../ActionsWorkOrders';


const mapStateProps = state => ({
    workOrders: Object.assign({}, state.workOrders),
});

const mapDispatchToProps = dispatch => ({
    onFetchWorkOrders: () => {
        dispatch(requestWorkOrders());
    },
});

const WorkOrders = connect(
    mapStateProps,
    mapDispatchToProps,
)(WorkOrdersComponent);

export default WorkOrders;

