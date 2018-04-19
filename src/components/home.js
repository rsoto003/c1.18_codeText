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
        
        // make sure to remove the listener
        // when the component is not mounted anymore
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
                    {/* <h4 className="text-center mt-3 font-weight-bold">Join us and begin your adventure here with us today.</h4> 
                    <div className="text-center font-weight-bold mt-3">
                    <Link to="/register" className="btn btn-danger font-weight-bold mr-2" >Log In</Link>  
                    <Link to="/home/newest" className="btn btn-danger font-weight-bold">Skip</Link> 
                    </div>               */}
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



