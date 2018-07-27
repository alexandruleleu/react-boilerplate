import { connect } from 'react-redux';
import HomeComponent from './Home';
import { } from '../ActionsWorkOrders';


const mapStateProps = state => ({
    home: Object.assign({}, state.home),
});

const mapDispatchToProps = dispatch => ({

});

const Home = connect(
    mapStateProps,
    mapDispatchToProps,
)(HomeComponent);

export default Home;