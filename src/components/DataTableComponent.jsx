import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import GenericTableHeader from './GenericTableHeader';

class DataTableComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <div className="work-orders_data-tabble-buttons">
                <Button color='blue' size='small'>
                <Icon name='search' /> Zoeken
                </Button>
                <Button color='blue' size='small'>
                <Icon name='erase' /> Wissen
                </Button>
                <Button color='blue' size='small'>
                <Icon name='hide' /> Verbergen
                </Button>

                <GenericTableHeader />
            </div>
        );
    }
}
export default DataTableComponent;