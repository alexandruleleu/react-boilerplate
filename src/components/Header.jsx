import React from 'react';
import MenuComponent from './MenuComponent';
import MainComponent from './MainComponent';
class Header extends React.Component {
    
    render() {
        return (
            <div>
                <MainComponent />
                <MenuComponent page={this.props.page === '/' ? 'home' : this.props.page.substr(1,this.props.page.length - 1)} />
            </div>
        );
    }
}

export default Header;