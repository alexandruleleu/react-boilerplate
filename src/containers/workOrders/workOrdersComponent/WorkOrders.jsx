import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import FiltersComponent from '../../../components/Filters';
import DataTableComponent from '../../../components/DataTableComponent'
class WorkOrdersComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: 'workOrders',
        };

        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(event , { name }) {
        this.setState(() => {
            return {
                activeItem: name,        
            };
        });
    }


    render() {

        return (
            <div className="work-orders__container">
                <div className="work-orders__header">
                    <h3>Werkverzoek</h3>
                    <div className="work-orders__header-icons">
                    <Icon name='question' />
                    <Icon name='star' />
                    </div>
                </div>

                <div className="work-orders__body">
                    <Menu tabular color='blue'>
                        <Menu.Item name='workOrders' active={this.state.activeItem === 'workOrders'} onClick={this.handleMenuClick} >
                            Werkverzoek
                        </Menu.Item>
                        <Menu.Item name='missions' active={this.state.activeItem === 'missions'} onClick={this.handleMenuClick} >
                            Opdrachten
                        </Menu.Item>
                    </Menu>

                    <div className="work-orders_menu">
                        <FiltersComponent />
                        <div className="work-orders_data-table">
                            <DataTableComponent />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkOrdersComponent;
