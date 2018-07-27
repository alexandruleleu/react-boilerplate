import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//core componets
import Header from './components/Header';

//page components
import Home from './containers/home';
import About from './containers/about';
import WorkOrders from './containers/workOrders/workOrdersComponent/ContainerWorkOrders';

class App extends React.Component {

    render() {
        return (
          <div>
            <Header
                page={this.props.app.router.location.pathname} 
            />
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/work-orders" component={WorkOrders} />
              <Route exact path="/about-us" component={About} />
            </main>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
  return ({
      app: state,
  });
};

export default connect(mapStateToProps)(App);
