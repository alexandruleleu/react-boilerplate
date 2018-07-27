import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

export default class MenuComponent extends Component {
  state = { activeItem: this.props.page }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary color="blue">
            <Menu.Item 
                as={Link} 
                to='/'   
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}>
                Home
            </Menu.Item>
            
         
            <Menu.Item
                as={Link} 
                to='/work-orders'   
                name='work-orders'
                active={activeItem === 'work-orders'}
                onClick={this.handleItemClick}
            />

            <Menu.Item
                as={Link} 
                to='/about-us'   
                name='about-us'
                active={activeItem === 'about-us'}
                onClick={this.handleItemClick}
            />
        </Menu>
      </div>
    )
  }
}