import React, { Component } from 'react';
import Comp1 from '../components/Comp1';
import Comp2 from '../components/Comp2';
import Comp3 from '../components/Comp3';

class Section1 extends Component {
    state = {
        anmclass1: "",
        anmclass2: "",
        anmclass3: ""
    }
    componentDidMount() {
        window.addEventListener('scroll', this.updateScroll);
    }
    updateScroll = () => {
        var scr_pos = window.pageYOffset;
        if(scr_pos <= 350) {
            this.setState({anmclass1: "anm_appear"});
          } 
          else if( scr_pos > 350 && scr_pos <= 650) 
          {
            this.setState({anmclass2: "anm_appear"});
          }
          else if(scr_pos > 600 && scr_pos <= 630) 
          {
            this.setState({anmclass3: "anm_appear"});

          } 
          else if(scr_pos > 630 && scr_pos <= 900) 
          {          
            this.setState({anmclass1: "",
                           anmclass2: "",
                           anmclass3: ""
        });
          }
          console.log(scr_pos);
    }
    render() {

        return (
            <div>
                <Comp1 anmclss={this.state.anmclass1}/>
                <Comp2 anmclss={this.state.anmclass2}/>
                <Comp3 anmclss={this.state.anmclass3}/>
            </div>
        )
    }
}

export default Section1;