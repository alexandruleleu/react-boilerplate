import React from 'react';
import { Icon, Menu, Form, Dropdown } from 'semantic-ui-react';

import DatePicker from 'react-datepicker';
import moment from 'moment';


class FiltersComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(),
            roundedStateOptions: [
                { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
                { key: 'fda', value: 'af', flag: 'af', text: 'Afghanistan' }
            ],
            urgencyStateOptions: [
                { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
                { key: 'fsdg', value: 'af', flag: 'af', text: 'Afghanistan' }
            ],
            recordsStateOptions: [
                { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
                { key: 'fasda', value: 'af', flag: 'af', text: 'Afghanistan' }
            ]
        };

        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    handleChangeDate(date) {
        this.setState({
          startDate: date
        });
      }


    render() {
        return (
            <div className="work-orders_search-area">
                <Form className="form_body_first-column">
                    <Form.Group inline className="form_line">
                        <label>Bonnummer</label>
                        <Form.Input width={3} />
                        <Form.Input width={5} />
                        <Icon name='info circle' color='blue' size='large' className="info-icon"/>
                    </Form.Group>

                    <Form.Group inline className="form_line">
                        <label>Relatie</label>
                        <Form.Input width={8} />
                    </Form.Group>
                    
                    <Form.Group inline className="form_line">
                        <label>Object</label>
                        <Form.Input width={8} />
                    </Form.Group>

                    <Form.Group inline className="form_line">
                        <label>Adres</label>
                        <Form.Input width={8} />
                    </Form.Group>
                </Form>

                {/* <Form className="form_body_second-column">
                    <Form.Group inline className="form_line">
                        <label>Afgerond</label>
                        <Dropdown search selection options={this.state.roundedStateOptions} className="form_line_second-row" />
                    </Form.Group>

                    <Form.Group inline className="form_line">
                        <label>Urgentie</label>
                        <Dropdown search selection options={this.state.urgencyStateOptions} className="form_line_second-row" />
                    </Form.Group>

                </Form> */}
            </div>
        );
    }
}
export default FiltersComponent;