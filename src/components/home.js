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

        if(this.state.width < 600){
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
            <div className='w-100'>
                {this.renderSliderOrBackGround()}                
            </div>
        )
    }    
}

export default HomePage;



