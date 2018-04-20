import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HomeSliderDesktop from './home_slider_desktop';
import HomeSliderMobile from './home_slider_mobile';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }
        componentWillMount() {
            window.addEventListener('resize', this.handleWindowSizeChange);
        }
        
        componentWillUnmount() {
            window.removeEventListener('resize', this.handleWindowSizeChange);
        }
        
        handleWindowSizeChange = () => {
            this.setState({ width: window.innerWidth });
        };

        renderSliderOrBackGround = () => {
        console.log('Window Width: ', this.state.width);

        if(this.state.width < 600){
            console.log('Window Width: ', this.state.width);
            return (                
                <HomeSliderMobile/>               
            );
        }
        else if(this.state.width > 600){
            return (
                
                <div>
                    <HomeSliderDesktop/> 
                    
                </div>
            );
        }
    }    

    render(){        
       
        return (
            <div>
                {this.renderSliderOrBackGround()}                
            </div>
        )
    }    
}

export default HomePage;



