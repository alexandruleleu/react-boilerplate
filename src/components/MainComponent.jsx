import React, { Component } from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'

export default class MainComponent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    return (
      <div>
        <Menu secondary className="header__component">
          <Menu.Item
            className="header__component-icon"
          >
            <Icon name='sidebar' size='small' /> ViewPoint
          </Menu.Item>
          <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' className='search-input' placeholder='Zoeken in ViewPoint...' />
              </Menu.Item>
              <Menu.Item
                className="header__component-icon"
              >
                <Icon name='question' size='small' />
              </Menu.Item>
              <Menu.Item
                className="header__component-icon"
              >
                <Icon name='bell' size='small' />
              </Menu.Item>
              <Menu.Item
                className="header__component-icon"
              >
                Naam <Icon name='user' className='profile-icon' size='small' />
              </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}